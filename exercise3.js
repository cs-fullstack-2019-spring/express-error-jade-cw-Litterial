const express=require('express');
const router= express.Router();


router.get('/',(req,res)=>
{
    // context={
    //   placeholder1:placeholder1,
    //   placeholder2:placeholder2,
    // };
    res.render('exercise3')   //render on exercise3 template
});












module.exports=router;


