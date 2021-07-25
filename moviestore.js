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
}

module.exports = MovieStore;