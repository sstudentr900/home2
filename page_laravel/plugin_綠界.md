# 綠界

## 0.MerchantID及HashKey、HashIV的取得
https://www.ecpay.com.tw/CascadeFAQ/CascadeFAQ_Qa?nID=1179


## 1.Composer 安裝
https://github.com/ECPay/SDK_PHP<br>
```
   composer require ecpay/sdk
``` 


## 2.CSRF設定(讓外部可以連進來)
add/http/middleware/verifyCsrfToken.php
```php
    protected $except =[
        //允許該路由進入
        'payment_result','payment_ok'
    ]
```


## 3.router 設定
routes/web.php
```php
    //付款頁
    Route::post('payment', [FnController::class,'payment']);
    //付款完成
    Route::post('payment_result/{id}', [FnController::class,'payment_result']);
    //付款結果
    Route::post('payment_ok/{id}', [FnController::class,'payment_ok']);
```


## 4.結帳頁面(表單儲存但未付款)
add/http/controllers
```php
    //引入插件
    use Ecpay\Sdk\Factories\Factory;
    use Ecpay\Sdk\Services\UrlService;
    function payment(){
        //訂單編號
        $merchant_no = time();

        //存取訂單
        $data = new data_barecord;
        $data->merchant_no = $merchant_no;//訂單編號
        // $data->trade_no = ;//綠界交易編號
        // $data->payment_type = ;//付款方式
        $data->memberid = $user['id'];//會員ID
        $data->duesid = $buyInfo['id'];//購買方案ID
        $data->state = 0;//當前狀態未付款
        $data->save();
        $recordID = $data->id;//取得ID


        $action = 'https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5';
        $factory = new Factory([
            'hashKey' => '5294y06JbISpM5x9', //測試用Hashkey，請自行帶入ECPay提供的HashKey
            'hashIv' => 'v77hoKGq4kWxNNIS', //測試用HashIV，請自行帶入ECPay提供的HashIV
        ]);
        $autoSubmitFormService = $factory->create('AutoSubmitFormWithCmvService');
        $input = [
            'MerchantID' => '2000132', //測試用MerchantID，請自行帶入ECPay提供的MerchantID
            'MerchantTradeNo' =>  $merchant_no, //訂單編號
            'MerchantTradeDate' => date('Y/m/d H:i:s'), //交易時間
            'PaymentType' => 'aio', //
            'TotalAmount' => 400, //交易金額
            'TradeDesc' => UrlService::ecpayUrlEncode('交易描述範例'), //交易描述
            'ItemName' => '範例商品一批 100 TWD x 1',
            'ChoosePayment' => 'ALL', //付款方式:全功能
            'EncryptType' => 1, //CheckMacValue加密類型，請固定填入1，使用SHA256加密
            'ReturnURL' => 'http://localhost:3000/fnmember_payment_result'.'/'.$recordID, //付款完成回傳網址(背後執行需要正式網址或ngrok)
            'OrderResultURL' => 'http://localhost:3000/fnmember_payment_ok'.'/'.$recordID,//付款結果回傳網址,如果付款結果網址[OrderResultURL]參數沒有值時，會導向綠界的付款結果頁。綠界的付款結果頁可以顯示「返回商店」按鈕，條件是訂單資料的返回特店網址[ClientBackURL]要有填值。
        ];
        echo $autoSubmitFormService->generate($input, $action);
    }
```


## 5.自訂檢查CheckMacValue函數
add/http/controllers
```php
    function ecpayCheckMacValue(array $params){
        $encType = 1;
        $hashKey = config('ecpay.HashKey'); //測試用Hashkey，請自行帶入ECPay提供的HashKey
        $hashIV = config('ecpay.HashIV'); //測試用HashIV，請自行帶入ECPay提供的HashIV

        // 0) 如果資料中有 null，必需轉成空字串
        $params = array_map('strval', $params);
        
        // 1) 如果資料中有 CheckMacValue 必需先移除
        unset($params['CheckMacValue']);

        // 2) 將鍵值由 A-Z 排序
        uksort($params, 'strcasecmp');

        // 3) 將陣列轉為 query 字串
        $paramsString = urldecode(http_build_query($params));

        // 4) 最前方加入 HashKey，最後方加入 HashIV
        $paramsString = "HashKey={$hashKey}&{$paramsString}&HashIV={$hashIV}";

        // 5) 做 URLEncode
        $paramsString = urlencode($paramsString);

        // 6) 轉為全小寫
        $paramsString = strtolower($paramsString);

        // 7) 轉換特定字元
        $paramsString = str_replace('%2d', '-', $paramsString);
        $paramsString = str_replace('%5f', '_', $paramsString);
        $paramsString = str_replace('%2e', '.', $paramsString);
        $paramsString = str_replace('%21', '!', $paramsString);
        $paramsString = str_replace('%2a', '*', $paramsString);
        $paramsString = str_replace('%28', '(', $paramsString);
        $paramsString = str_replace('%29', ')', $paramsString);

        // 8) 進行編碼
        $paramsString = $encType ? hash('sha256', $paramsString) : md5($paramsString);

        // 9) 轉為全大寫後回傳
        return strtoupper($paramsString);
    }
```


## 6.付款完成回傳(已付款)
add/http/controllers
```php
    public function payment_result(id){
        $input = request()->all();
        // print_r($input['MerchantID']);//特店編號
        // print_r($input['MerchantTradeNo']);//訂單編號
        // print_r($input['PaymentDate']);//交易時間
        // print_r($input['PaymentType']);//付款方式
        // print_r($input['SimulatePaid']);//0為模擬付款1不是
        // print_r($input['TradeAmt']);//交易金額
        // print_r($input['TradeNo']);//綠界交易編號
        // print_r($input['CheckMacValue']);//檢查碼
        // print_r($input['RtnMsg']);//交易訊息Succeeded 
        // print_r($input['RtnCode']);//交易狀態成功為1
        // print_r($input['PaymentTypeChargeFee']);//通路費
        // echo '<br><br>';
        $CheckMacValue = $this->ecpayCheckMacValue($input);//檢查CheckMacValue
        $PaymentType = $input['PaymentType'];
        switch($PaymentType){
            case 'ATM_TAISHIN':
                $payType = '台新銀行 ATM';
                break;
            case 'ATM_ESUN':
                $payType = '玉山銀行';
                break;
            case 'ATM_BOT':
                $payType = '台灣銀行 ATM';
                break;
            case 'ATM_FUBON':
                $payType = '台北富邦 ATM';
                break;
            case 'ATM_CHINATRUST':
                $payType = '中國信託 ATM';
                break;
            case 'ATM_FIRST':
                $payType = '第一銀行';
                break;
            case 'ATM_LAND':
                $payType = '土地銀行 ATM';
                break;
            case 'ATM_CATHAY':
                $payType = '國泰世華銀行 ATM';
                break;
            case 'ATM_TACHONG':
                $payType = '大眾銀行 ATM';
                break;
            case 'CVS_CVS':
                $payType = '超商代碼繳款';
                break;
            case 'CVS_OK':
                $payType = 'OK 超商代碼繳款';
                break;
            case 'CVS_FAMILY':
                $payType = '全家超商代碼繳款';
                break;
            case 'CVS_HILIFE':
                $payType = '萊爾富超商代碼繳款';
                break;
            case 'CVS_IBON':
                $payType = '7-11 ibon 代碼繳款';
                break;
            case 'Credit_CreditCard':
                $payType = '信用卡';
                break;
        }
        $data = data_barecord::find($id);
        if($data && $input['RtnCode']=='1' && $input['CheckMacValue']==$CheckMacValue){
            //更新
            $data->trade_no = $input['TradeNo'];//綠界交易編號
            $data->payment_type =  $payType;//付款方式
            $data->state = 1;//當前狀態
            $data->save();

            return '1|OK';
        }
    }
```


## 7.付款結果回傳(跳到首頁)
add/http/controllers
```php
    public function payment_ok($id){
        $input = request()->all();
        $CheckMacValue = $this->ecpayCheckMacValue($input);//檢查CheckMacValue
        $recordInfo = data_barecord::find($id);
        if($recordInfo && $input['RtnCode']=='1' && $input['CheckMacValue']==$CheckMacValue){
            session(['fnuser_id' => $recordInfo['memberid']]);//session紀錄會員編號
            return redirect('fnmember_record')->with('status', '付款成功!!');//到繳費紀錄
        }else{
            return redirect('fnmember')->with('status', '付款失敗，請聯絡客服!!');  //到登入頁
        }

        
    }
```