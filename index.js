const express = require('express')
const app = express()
const port = process.env.PORT || 80;


app.get('/', (req, res) => {
  let authData = fetch(".auth/me");
  res.send(authData)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
