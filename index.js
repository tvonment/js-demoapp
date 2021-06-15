const express = require('express')
const app = express()
const port = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send('Hello Öpis anders! ' + process.env.NAME)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
