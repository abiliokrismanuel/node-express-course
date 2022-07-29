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

app.listen(8000,function () {
    console.log("server is running")
    
})