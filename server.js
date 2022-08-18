const express = require('express');
const app =express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

const mockUserData=[
    {name:'abilio'},
    {name:'krismanuel'}
]

app.get('/user',function(req,res){
    res.json({
        success: true,
        message: 'successfully got users. NICE!',
        users: mockUserData
    })
})

app.get('/users/:id',function(req,res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user:req.params.id
    })
})

app.post('/login',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    //this should come from database
    const mockUsername="abiliow";
    const mockPassword="krismanuel";
    
    if(username===mockUsername && password===mockPassword){
        //use json web token
        res.json({
            success:true,
            message:'password and username match',
            token:'encrypted token goes here'
        })
    }else{
        res.json({
            success:false,
            message:'password does not match'
        })
    }
})

app.listen(8000,function () {
    console.log("server is running")
    
})