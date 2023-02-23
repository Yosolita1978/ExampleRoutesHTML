const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(cors());
const jsonParser = bodyParser.json();

// Telling express - there is another folder that you need to find 
app.use(express.static("../client"));


app.get('/', (req, res) =>{
    //res.json("Hello this will be a single page");
    res.sendFile(path.join(__dirname, "../client/index.html"));
});

app.get('/aboutme', (req, res) =>{
    //res.json("Hello this will be a single page");
    res.sendFile(path.join(__dirname, "../client/about.html"));
});

app.use((req, res) =>{
    res.status(404).sendFile(path.join(__dirname, "../client/404.html"))
})

app.listen(PORT, ()=> console.log(`HOLA! this is my server in port ${PORT} `));
