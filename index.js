const express = require('express')
const app = express()
const port = process.env.PORT || 80;

let authData = fetch(".auth/me");

app.get('/', (req, res) => {
  res.send(authData)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
