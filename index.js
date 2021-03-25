const express = require('express')
const app = express()
const port = process.env.port || 8080;

app.get('/', (req, res) => {
  res.send('Hello ' + process.env.Name + ' - You ar running on: ' + process.env.Env)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
