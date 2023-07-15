const express = require('express');
const usersRouter = require('./userRouter');

const app = express();
const port = 7777;

app.use(express.json());

app.use(`/songs`, usersRouter);

app.get('/', (req, res)=>
{
    res.send(`<h2>welcome to server</h2>`);
});

app.listen(port, ()=>
{
   console.log(`SERVER 실행됨 ${port}`); 
});