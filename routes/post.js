const router = require('express').Router();
const verify = require('./verifytoken')

router.get('/',verify, (req,res)=>{
    console.log('tst')
    res.send(req.user);
    User.findbyOne({_id: req.user})
});


module.exports = router;