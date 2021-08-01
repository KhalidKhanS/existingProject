const express = require('express');
const path = require('path');
const router = express.Router();
const blogs = require('../data/blogs');


router.get('/', (req, res)=>{
    // res.sendFile(path.join(__dirname,'../templates/index.html'))
    res.render('home')
})

router.get('/blog', (req, res)=>{
    // res.sendFile(path.join(__dirname, '../views/blogHome.html'))
    res.render('blogHome',{
        blogs : blogs
    })
})

router.get('/blogpost/:slug', (req, res)=>{
    myblogs = blogs.filter((taker)=>{
        return taker.slug == req.params.slug
    })
    console.log('All BLOGS : ', myblogs)
    // res.sendFile(path.join(__dirname, '../views/blogPage.html'))
    res.render('blogPage',{
        title : myblogs[0].title,
        content : myblogs[0].content
    })
})

module.exports = router;