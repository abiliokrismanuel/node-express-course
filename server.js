const express = require('express');
const app =express();

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

app.listen(8000,function () {
    console.log("server is running")
    
})