const fetch = require('cross-fetch');
const express = require('express');
const app = express();
const currentDate = new Date();

function validateSubscription() {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bot MTEwMDE5NzM0NzU3NDY4MTYyNA.GFbP0T.rGC_nkoVeNGiUI4rdiZg8kCRxxhygbUyyA7eDM");
 
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
