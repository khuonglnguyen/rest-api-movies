class MovieStore {
    constructor() {
        this.movieData = require('./datastore.json');
    }

    all() {
        return this.movieData;
    }

    find(title) {
        return this.movieData.filter(x => x.Title === title);
    }

    add(movie) {
        this.movieData.push(movie);
    }

    has(title) {
        let movies = this.find(title);

        return movies.length > 0;
    }

    update(title, newInfo) {
        let movies = this.find(title);

        if (movies.length < 1) {
            return false;
        }

        let oldMovie = movies.pop();
        let newMovie = Object.assign(oldMovie, newInfo);

        let oldMovies = this.movieData.filter(x => x.Title !== title);
        this.movieData = [...oldMovies, newMovie];
        return true;
    }

    remove(title){
        this.movieData = this.movieData.filter(x => x.Title !== title);
    }

    search(title){
        return this.movieData.filter(x=>x.Title == title);
    }
}

module.exports = MovieStore;