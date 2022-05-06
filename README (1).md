# WSS Environment Setup
## Common

* ### Install Node
  * [Download](https://nodejs.org/en/download/)

## Frontend

* ### Install project dependencies
  ```
  npm install
  ```

* ### Run Frontend
  ```
  npm run serve
  ```

## Backend
* ### Install Docker
  * [Download](https://www.docker.com/products/docker-desktop)
  
* ### Install project dependencies
  ```
  npm install
  ```
* ### Setup Mysql8 & Init Database
  此步驟可能會花較多時間
  ```
  npm run mysql:start
  ```
  當Docker上出現ready for connections代表完成
  ![](https://cdn.discordapp.com/attachments/648822377773400075/933721506838634576/unknown.png)
  註:如果電腦為M1 MAC 請至 docker-compose.yml 將`第15行#`移除
  
* ### Setup Backend Environment
  1. 複製`.example.env`一份，並將名稱命名為`.env`  
  ![](https://cdn.discordapp.com/attachments/648822377773400075/933723122077687868/unknown.png)  
  2. 編輯`.env` 將Google帳號填入`MAILUSER` & `MAILPASS` 如下圖  
  ![](https://cdn.discordapp.com/attachments/648822377773400075/933723746278211694/unknown.png)
  3. 使用瀏覽器登入步驟2所輸入的Google帳戶，並至帳戶設定->安全性->低安全性應用程式存取權，將此設定打開 如下圖  
  ![](https://cdn.discordapp.com/attachments/648822377773400075/933724194728988702/unknown.png)
  * 註:若是想使用生產環境來運行，可至`.env`將`NODE_ENV`改成`production`

* ### Run Backend
  ```
  npm run start
  ```

## 註
 1. 若是不想運行後端，可至前端`\src\services\service.config.js`將第二行註解移除並將第三行註解掉，這個後端我們將持續運行到`1/28`
 2. 若是想直接看成果可至 https://prj.inf.saihs.edu.tw/ 伺服器將會持續運行到`1/28`

## [Frontend GitHub](https://github.com/shiow620412/DatabaseSystemProject-Frontend)  
## [Backend GitHub](https://github.com/shiow620412/DatabaseSystemProject-Backend/settings)