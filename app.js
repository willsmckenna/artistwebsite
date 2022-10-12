const path = require('path');
const express = require('express')
const app = express()
const port = 1234

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/templates/index.html'))
})

app.get('/bio', (req, res) => {
    res.sendFile(path.join(__dirname, '/templates/bio.html'))
})

app.get('/performances', (req, res) => {
    res.sendFile(path.join(__dirname, '/templates/performances.html'))
})

app.get('/media', (req, res) => {
    res.sendFile(path.join(__dirname, '/templates/media.html'))
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})