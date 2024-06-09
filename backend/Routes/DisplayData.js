const express = require('express');
const router = require('./createUser');


router.post('/foodData',async(req,res)=>{
    try {
        console.log(global.food_items,global.food_category)
        res.send([global.food_items,global.food_category])
    } catch (error) {
        console.log(error);
        res.send('Server Error')
    }
})

module.exports = router