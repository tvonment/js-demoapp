const express = require('express')
const app = express()
const port = process.env.port || 8080;

app.get('/', (req, res) => {
  res.send('Hello World! Ich laufe auf ' + process.env.ENV + ' mit dem Namen: ' + process.env.NAME)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
