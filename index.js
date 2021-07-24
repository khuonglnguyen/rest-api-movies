let express=require('express');
let app=express();

app.get('/',function (req,res){
    return res.send('hello world');
});

app.get('/bye',function (req,res){
    return res.send('see you again');
});

app.listen(8000,function (){
   console.log('server started at: 127.0.0.1:8000')
});