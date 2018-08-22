Requirements:
  InstaLooter : https://github.com/althonos/InstaLooter (pip)
  Node
  npm
Installation:
  git clone git@github.com:mojish/Learn-English-Persian.git
  cd Learn-English-Persian
  cd english_learning_server
  npm install
  cd ../
  cd english_learning_client
  cd src/english_data
  instalooter user vocab.coding -j 5 -n 100 -d -T {username}-{datetime}            -> get 100 cards
  cd ../../
  npm install

Usage:
  cd english_learning_server
  node app.js &     -> server start on port 8080
  cd ../
  cd english_learning_client
  npm start        -> client start on port 3000
  open : localhost:3000
