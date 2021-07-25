let express=require('express');
let app=express();

let MovieStore=require('./moviestore');
let moiveStore=new MovieStore();

let indexHandler=(req,res) => {
    return res.send(moiveStore.all());
};

app.get('/movies', indexHandler);

app.get('/bye', (req,res) =>{
    return res.send('see you again');
});

app.listen(8000, () =>{
   console.log('server started at: 127.0.0.1:8000')
});