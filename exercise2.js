const express=require('express');
const router= express.Router();


router.get('/:placeholder',(req,res)=>
{
    if (req.params.placeholder <= '0') {   // if less than or equal to 0
        context = {
            placeholder1: "Less Than",

        };
    }
    else if( req.params.placeholder > '0'){ // greater than zero
        context={
            placeholder1:"Greater Than",
        };
    }

    else {   //else
        context = {
            placeholder1: "Greater Than",
        };
    }
    res.render('exercise2',context)  //render on exercise 2 template
});













module.exports=router;

