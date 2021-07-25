let express=require('express');
let app=express();

let MovieStore=require('./moviestore');
let moiveStore=new MovieStore();

app.get('/movies', (req,res) => {
    return res.send(moiveStore.all());
});

app.get('/',(req,res)=>{
    return res.redirect('/movies');
});

app.listen(8000, () =>{
   console.log('server started at: 127.0.0.1:8000')
});