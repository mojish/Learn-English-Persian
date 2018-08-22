
# English-Learning-Persian

### Prerequisites

* InstaLooter : https://github.com/althonos/InstaLooter (pip)
* Node
* npm

### Installing

```
git clone git@github.com:mojish/Learn-English-Persian.git
```
```
cd Learn-English-Persian/english_learning_server
```
```
npm install
```
```
cd ../english_learning_client
```
```
mkdir -p src/english_data 
```
```
cd src/english_data 
```
```
get 100 cards: 
```
```
instalooter user vocab.coding -j 5 -n 100 -d -T {username}-{datetime}           
```
```
cd ../../ 
```
```
npm install 
```
### Usage
```
cd english_learning_server
```
```
server start on port 8080 :
```
```
node app.js & 
```
```
cd ../english_learning_client
```
```
client start on port 3000 :
```
```
npm start    
```
```
open : localhost:3000
```
