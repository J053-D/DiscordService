const fetch = require('cross-fetch');
const express = require('express');
const app = express();
const currentDate = new Date();

function validateSubscription() {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bot MTEwMDE5NzM0NzU3NDY4MTYyNA.GW9-ri.Zco15oDt7XRdT7yhngWlSBEeIFJOw3mKwQq88k");
    myHeaders.append("Cookie", "__cfruid=2b1947f352e449974ad8953dd7c01412c391d0d4-1683591410; __dcfduid=a2d952f8e45011ed99d0b27d0c552fe0; __sdcfduid=a2d952f8e45011ed99d0b27d0c552fe0792cc7050229cb5fe380aba3e1ed55402bbdafc3fce3591ad431a7a2c9fe3efa");
 
    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://discord.com/api/guilds/1100095579310268457/bans/419903832307400705", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


}

// cron.schedule(`${frequence}`, () => { validateSubscription() });
//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    validateSubscription();
    res.sendFile('index.html', { root: __dirname });      //server responds by sending the index.html file to the client's browser
    //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.listen(5000, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${5000}`);
});
