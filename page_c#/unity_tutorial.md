## 取得遊戲組件
 ```c#
    //取的Camera 不啟用 fslse
    gameObject.GetComponent<Camera>().enabled = false;
    //開啟關閉遊戲物件(tage)
    gameObject.SetActive(false);
 ```
 ----
[Unity互動式遊戲程式設計入門 #2 Unity與C#程式基本概念](https://www.youtube.com/watch?v=jL7PqYz4eB0)<br>


## Vector
**Vector2，二維向量，在平面座標系中，與原點的差值。Vector2(x,y)。**
**Vector3，三維向量，在三維空間中，與原點的差值。Vector3(x,y,z)。**
 ```c#
    //向量變數基本用法
    Vector2 vec2 = new Vector2(1,0);//int x=1 , int y=0
    Vector3 vec3 = new Vector3(1.0f,0.0f,0.5f);//float x=1.0 , float y=0.0 , float z=0.5

    Debug.Log(vec2.x); //1
    Debug.Log(vec3.z); //0.5
 ```

## 角色移動
```c#
    float moveSpeed = 5f;
    //取得鍵盤右鍵
    if(Input.GetKey(KeyCode.RightArrow))
    {
        //物件往右移
        transform.Translate(moveSpeed*Time.deltaTime,0,0);
    }
    //左移
        if(Input.GetKey(KeyCode.LeftArrow))
    {
        //Time.deltaTime 應用程序運行的速率
        transform.Translate(-moveSpeed*Time.deltaTime,0,0);
    }
```
---
[unity角色移動](https://ithelp.ithome.com.tw/articles/10261252)<br>


## Rigidbody2D 剛體
![Imgur](https://i.imgur.com/l13h1A3.jpg)<br>
![Imgur](https://i.imgur.com/s53qeMY.png)<br>
![Imgur](https://i.imgur.com/7rAc0AJ.png)<br>

#### 運動種類Body Type，可以選擇物理系統
1. Dynamic 動力，運動時受力影響。
2. Kinematic 運動，不受力影響但會運動。
3. static 固定，不受力影響也不會動。

#### 物理屬性
1. Mass質量，F=ma，會影響碰撞速度，大質量去撞小質量，小質量會用較快的速度飛出去。
2. Drag阻力，分為線性阻力和角阻力。像摩擦力一樣，決定慢下來的速度。
3. Gravity Scale重力大小，物體受重力影響的程度。
※環境重力可以調整(Edit → Project Settings... → Physic 2D)

#### 碰撞偵測Collision Dectection
1. Discrete 非連續性
2. Continuous 連續性

#### 睡眠模式Sleeping Mode
睡眠模式決定rigidbody要不要工作(啟用)，醒著就要，睡著就不用，可透過事件改變狀態。
1. Never Sleep 不睡，一直都醒著
2. Start Awake 開始時醒著
3. Start Asleep 開始時睡著

#### 差值Interpolate
差值，系統推算與差值，負責改善不規則位移，如果運動起來有不明抖動可以打開這個修正。
1. None 無
2. Interpolate 差值，根據前一幀的位置進行平滑
3. Extrapolate 推算，推算下一幀的位置進行平滑

#### 限制Constraints
1. Freeze Position X Y ，限制X軸或Y軸位移，可以做成平移或垂直移動。
2. Freeze Rotation Z ，限制Z軸轉動，這樣人物就不會翻轉，才不會頭下腳上。

#### Rigidbody 2D移動
```C#
    void Awake() //或是void Start()
    {
        Rigidbody2D rb; //建立剛體2D，名叫rb(自己取)
        rb=GetComponent<Rigidbody2D>(); //抓取物件的剛體
    }

    void Update()
    {
        movement();
    }

    void movement()
    {
        if (Input.GetKey("d"))  //其他方向以此類推
        {
            rb.velocity= Vector2.right;
        }
    }
```
----
[剛體2D](https://ithelp.ithome.com.tw/articles/10261602)<br>


## unity物件偵測
![Imgur](https://i.imgur.com/hcxssam.jpg)<br>
![Imgur](https://i.imgur.com/JBYYUSv.png)<br>
![Imgur](https://i.imgur.com/KC1xlxU.jpg)<br>

#### Material 材質
可以下載不同模式的碰撞效果(例如彈跳皮球或冰塊材質的運動)，也可以是空值。

#### Is Trigger 觸發器
打開的話不會與其他物體碰撞，取消物理系統，會被穿越，碰到可以觸發事件。

#### 偵測事件
```C#
    //Enter函式是兩個物件碰撞瞬間，執行一次函式
    void OnCollisionEnter2D(Collision2D other) //傳入碰撞對象，other(自己取)
    {
    //碰撞成立之後想幹嘛就寫在這裡
        if(other.gameObject.tag=="Normal")
        {
            Debug.Log(other.gameObject.tag);
        }
    }

    //Exit函式是兩個物件分開瞬間，執行一次函式
    void OnCollisionExit2D(Collision2D other){}

    //Stay函式是兩個物件保持接觸，不斷執行函式
    void OnCollisionStay2D(Collision2D other){}
```

## Trigger事件
```C#
    void OnTriggerEnter2D(Collider2D other) {
        if(other.gameObject.tag=="DeathLine")
        {
            Debug.Log(other.gameObject.tag);
        }
    }
```

----
[物件偵測剛體2D](https://ithelp.ithome.com.tw/articles/10261685)<br>





## 動畫系統
先在window視窗上開啟Animation->Animatiion(動畫系統)&Animator(動畫控制系統)
![Imgur](https://i.imgur.com/tvNQNwb.png)<br>
創建動畫放入序列圖
![Imgur](https://i.imgur.com/xWp4WBF.png)<br>
Animator左上點Parameters的+號新增兩個布林值控制左轉跟右轉
![Imgur](https://i.imgur.com/2tFPQzQ.png)<br>
綁定player
![Imgur](https://i.imgur.com/Y9KiL8Y.png)<br>
Has Exit Time 取消打勾 不用緩衝直接執行<br>
conditions 設定甚麼狀況下要進入此動畫<br>
![Imgur](https://i.imgur.com/7BhYCbr.png)<br>

----
[了解動畫系統](https://ithelp.ithome.com.tw/articles/10261007)<br>