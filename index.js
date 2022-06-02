const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
//const axios = require('axios');

app.get('/', async (req, res) => {
  //let authDataRes = await axios.get('.auth/me')
  //res.send(authDataRes.data);
  res.send("Hello World!");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
