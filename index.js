const express = require('express') // impost thu vien
const app = express()
const port = 3000

app.get('/tin-tuc', (req, res) => {
    var a = 1;
    var b = 2;
    var c = a + b;
    return res.send('Hello Dat');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
