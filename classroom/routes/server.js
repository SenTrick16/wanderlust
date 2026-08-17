const express = require('express');
const app=express();
const users=require('./users.js');
const posts=require('./posts.js');
const session=require('express-session');

app.use(session({
    secret: 'mysupersecretstring'}));

app.get('/test', (req, res) => {
    res.send('Test route is working!');
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});