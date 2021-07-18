//const config = require('./settings.json');
const dotenv = require('dotenv');
dotenv.config();
const fs = require('fs');
const util = require('util');
const { path } =  require("path");
const mongoose = require('mongoose');
const cron = require('node-cron');
const fetch = require('node-fetch');


const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
/**
 * Function Include
 */

const { nowTime } = require(`./Functions/nowTime.js`);
const { msToTime } = require(`./Functions/msToTime.js`);


/*const processDetails = () => {
    let memoryUsage = util.inspect(process.memoryUsage());
    memoryUsage = JSON.parse(memoryUsage.replace('rss', '"rss"').replace('heapTotal', '"heapTotal"').replace('heapUsed', '"heapUsed"').replace('external', '"external"').replace('arrayBuffers', '"arrayBuffers"'));
  
    console.log('------------');
    console.log(`Heap Usage:\nRSS: ${(memoryUsage.rss / 1048576).toFixed(2)}MB\nHeapTotal: ${(memoryUsage.heapTotal / 1048576).toFixed(2)}MB\nHeapUsed: ${(memoryUsage.heapUsed / 1048576).toFixed(2)}MB`);
    console.log(`Current Up Time: ${msToTime(Math.floor(process.uptime()),"0")}`);
    console.log('------------');
};*/

app.use(express.static(__dirname + '/Pages/'));

app.get('/', async ({ query }, response) => {
    
    if(response.cookies){
        if(response.cookies.darkmode === undefined){
            response.cookie('darkmode', '1', {
                expires: new Date(Date.now() + 1000 * 100000)
            });
        }
    }else{
        console.log("Hiç Çerez Yok");
    }

    console.log('Cookies: ', response.cookies);

    console.log('Signed Cookies: ', response.signedCookies);

	return response.sendFile('index.html', { root: './Pages/' });
});

app.listen(process.env.ExpressPort, () => {
    console.log(`[${nowTime(1)}] Uygulama burada çalışıyor: http://localhost:${process.env.ExpressPort}`);
});

//console.log(processDetails());