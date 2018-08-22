// import { concat } from '../../.cache/typescript/2.6/node_modules/@types/async';

const express = require('express')
const app = express()

const randomFile = require('select-random-file')
const dir = '../english_learning_client/src/english_data/'

app.get('/new',async (req,res)=>{
    let promise = new Promise((resolve, reject) => {
        randomFile(dir, (err,file)=>{
            resolve(file);
        })
    });
    let address = await promise;
    console.log("sent "+address);
    address = address.substring(0,address.lastIndexOf('.'));
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({address: address})); 
})

app.listen(8080, () => console.log('Egnlish learning server listening on port 8080!'));