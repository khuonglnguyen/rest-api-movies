let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json({
    type: 'application/json'
}));

let MovieStore = require('./moviestore');
let movieStore = new MovieStore();

app.get('/movies', (req, res) => {
    return res.send(movieStore.all());
});

app.get('/', (req, res) => {
    return res.redirect('/movies');
});

app.get('/movies/:title', (req, res) => {
    let foundMovies = movieStore.find(req.params.title);
    if (foundMovies.length < 1) {
        res.statusCode = 404;
        return res.send({
            message: 'Movie not found'
        });
    }

    return res.send({
        message: 'Found movie',
        payload: foundMovies.pop()
    });
});

app.post('/movies', (req, res) => {
    if (!req.body.Title || req.body.Title.trim().Length < 1) {
        res.statusCode = 400;
        return res.send({
            message: 'missing or invalid title'
        });
    }

    if (movieStore.has(req.body.Title)) {
        res.statusCode = 400;
        return res.send({
            message: 'movie already existed'
        });
    }

    movieStore.add(req.body);
    return res.send({
        message: 'movie added successfully'
    });
});

app.put('/movies/:title', (req, res) => {
    if (!movieStore.update(req.params.title, req.body)) {
        res.statusCode = 500;
        return res.send({
            message:'failed to update movie info'
        })
    }

    return res.send({
        message: 'update movie successfully'
    });
});

app.listen(8000, () => {
    console.log('server started at: 127.0.0.1:8000')
});