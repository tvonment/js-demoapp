const express = require('express')
const app = express()
const port = process.env.PORT || 80;
const name = process.env.NAME || "Bob";

app.get('/', (req, res) => {
  res.send('Hello ' + name)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
