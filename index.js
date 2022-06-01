const express = require('express')
const app = express()
const port = process.env.PORT || 8080;

app.get('/', async (req, res) => {
  try {
    let authDataResponse = await fetch("/.auth/me");
    let authData = await authDataResponse.json();
    res.send(authData)
  } catch(e) {
    res.status(500).send(e);
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
