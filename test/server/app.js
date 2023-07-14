const express = require('express');

const app = express();
const port = 7700;

app.use(express.json());

app.get('/', (req, res)=>
{
    res.send(`<h2>welcome to server</h2>`);
});

app.listen(port, ()=>
{
   console.log(`SERVER 실행됨 ${port}`); 
});
console.log('hello')