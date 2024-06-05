const express = require('express');
const UserSchmea = require('../models/User');

const router = express.Router();
const bcrypt = require('bcrypt')
var jwt= require('jsonwebtoken')
const secretKey="abd@12345#"
router.post('/createuser',async(req,res)=>{
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt)
    try {
        await UserSchmea.create({
            name: req.body.name,
            email: req.body.email,
            password: secPassword,
            location: req.body.location
        })        
        res.json({success:true}).redirect('/')
    } catch (error) {
        console.log(error)
    }
})

router.post('/loginuser', async (req, res) => {
    try {
        const userData = await UserSchmea.findOne({ email: req.body.email });
        const pwdCompare = await bcrypt.compare(req.body.password,userData.password)
        const data={
            user:{
                id:userData.id
            }
        }
        if (pwdCompare) {
            const authToken = jwt.sign(data,secretKey);
            return res.json({success:true,authToken:authToken});
        } else { 
            res.json({ success: false, message: 'Invalid credentials' });
        }
        
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});
module.exports = router;