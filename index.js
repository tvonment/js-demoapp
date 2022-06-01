const express = require('express')
const app = express()
const port = process.env.PORT || 8080;
const axios = require('axios');



app.get('/', async (req, res) => {
  let authData = axios
    .get('https://example.com/todos')
    .then(res => {
      console.log(`statusCode: ${res.status}`);
      return res
    })
    .catch(error => {
      console.log(`error:`);
      console.error(error);
    });
    console.log("AuthData: ", authData);
    res.send(authData)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
