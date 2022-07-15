## npm 
#### --save  可以簡寫為 -S  已經成為預設指令
dependencies：build後發布版本仍然需要的套件  如element 套件
```
npm i 套件名
```
#### --save-dev  可以簡寫為 -D
devDependencies：在開發或測試的時候需要的套件 如sass 套件
```
npm i 套件名 -D
```
#### @安裝版本
```
npm i swiper@5
```
#### 版本衝突  ERESOLVE
[npm版本兼容导致的npm ERR](https://www.cnblogs.com/it-people/p/15500753.html)<br>
```
npm install --legacy-peer-deps
```
#### 移除
```
npm remove 套件名
```