const express=require('express');
const router= express.Router();
router.get('/:placeholder1/:placeholder2',(req,res)=>
{
    context={
      placeholder1:req.params.placeholder1,
      placeholder2:req.params.placeholder2,
    };
    res.render('exercise1',context)  //render on exercise 1 template
});













module.exports=router;