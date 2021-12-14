const express = require('express');
const router = express.Router();
const Post = require('../models/post')

//BACK ALL POSTS
router.get('/', async  (req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});
//ADD A POST
router.post('/', async (req,res)=>{
    const post = new Post({
       Districts: req.body.Districts,
        Sectors:req.body.Sectors,
        cells:req.body.cells,
        fullname:req.body.fullname,
        street:req.body.street,
        gate:req.body.gate,
        numberOfJercan:req.body.numberOfJercan
    });
    try{
    const savePost = await post.save();
    res.json(savePost);
    }catch(err){
        res.json({message:err })
    }
//
router.get('/pending', async(req, res)=>{
    try{
        const post = await Post.find({
            status: "Pending"
        })
        res.json(post);
    }catch(err){
        console.log(err)
    }
    
})
//SPECIFIC POST
router.get('/:postId', async(req, res)=>{
    try{
        const posti = await Post.findById(req.params.postId);
        res.json(posti)
    }catch(err){
        res.json({message:err});
    }
})

});

module.exports = router;