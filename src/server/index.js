
const dotenv = require('dotenv');
dotenv.config();

const fetch =require ('node-fetch')

var path = require('path')

const express = require('express')

const mockAPIResponse = require('./mockAPI')

const app = express()

const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const cors = require('cors');

app.use(cors());

app.use(express.static('/dist'))

// console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// GET route

app.get('/', function (req, res) {
    res.sendFile('/dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// POST route

// Código extraído da questão nr. 517022, do fórum do curso. Link:

// https://knowledge.udacity.com/questions/517022

app.post('/meaningcloud-api', async function (req, res){
  const apiURL = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${req.body.url}&lang=en`
  console.log(apiURL)
  const response = await fetch(apiURL)
  try {
    const data= await response.json()
    console.log(data)
    res.send(data)
  } catch(error) {
    console.log(error)
  }
})