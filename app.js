const express=require('express');
const my_app=express();
const index=require('./index');
const ex1=require('./exercise1');
const ex2=require('./exercise2');
const ex3=require('./exercise3');


my_app.set('view engine','pug');
my_app.use(express.static('public'));


my_app.use('/',index); // to index
my_app.use('/exercise1',ex1); // to exercise 1
my_app.use('/exercise2',ex2);  // to exercise 2
my_app.use('/exercise3',ex3); // to exercise 3
my_app.use((req,res)=>
    {
    res.send("404:Page not found",404)  //404 error
    }
);

my_app.listen(8000,()=>  //listener
{
   console.log('test server')
});