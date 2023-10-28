
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
//   res.send('<h1>Hello World! For Every One</h1>')
res.sendFile("Views/Home.html", {root: __dirname})
})

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})