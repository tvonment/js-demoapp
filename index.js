const express = require('express')
const app = express()
const port = process.env.PORT || 80;


app.get('/', async (req, res) => {
  let authDataResponse = await fetch("/.auth/me");
  authData = await authDataResponse.json();
  res.send(authData)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
