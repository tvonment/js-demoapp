const express = require('express')
const app = express()
const port = process.env.PORT || 80;
const someName = process.env.NAME || "BOB";

app.get('/', (req, res) => {
  res.send('Hello ' + someName)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
