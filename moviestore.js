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

    add(movie){
        this.movieData.push(movie);
    }
}

module.exports = MovieStore;