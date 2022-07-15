
# GitHub 上傳
## 1.先在本地(終端機)鍵入
```
    git init
```
## 2.新增README.md檔
```
    echo "# test" >> README.md
```
## 3.檔案註冊到索引裡
```
    git add README.md
```
## 4.提交資訊
```
    git commit -m "first commit"
```
## 5.指定remote add origin 遠端儲存庫位置
```
    git remote add origin https://github.com/sstudentr123/test.git
```
## 6.push到GitHub上面 origin 表示遠端，master 表示分支名
```
    git push -u origin master
```
---
[使用 GitHub 遠端儲存庫](https://github.com/doggy8088/Learn-Git-in-30-days/blob/master/zh-tw/24.md)<br>
[開始使用 GitHub， 註冊與建立repo](https://progressbar.tw/posts/3)
