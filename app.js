const express = require ('express');
const app = express();
const path = require('path')
const port = 3000;
app.use(express.static(path.join(__dirname, '/')));
app.get('/', (Request, Response) => {
    Response.send('index');
})
app.listen(port, () => console.log('Im running'));