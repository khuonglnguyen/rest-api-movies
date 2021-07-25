class MovieStore{
    constructor(){
        this.movieData=require('./datastore.json');
    }

    all(){
        return this.movieData;
    }
}

module.exports=MovieStore;