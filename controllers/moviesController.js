// import movies from '../data/movies.js';
import moviesModel from '../models/moviesModel.js';

const getAllMovies = (data_movie, data1, data2) => {
        
        data_movie.res.push(moviesModel.getMovies(data1, data2));
        console.log(data_movie.res);
}

const getMovieById = (data_movie) => {
    data_movie.res.push(moviesModel.getMovieById(data_movie.req.id));
}

const removeMovie = (data_movie) => {
    data_movie.res.push(moviesModel.getMovies());
    let ind = moviesModel.removeMovie(data_movie.req.id);
    data_movie.res.splice(ind, 1);
}



const createMovie = (data_movie) => {
    moviesModel.createMovie(data_movie.req);
}

const updateMovie = (data_movie) => {
    let allmovies = moviesModel.getMovies();
    let ind = allmovies.findIndex((obj => obj.id == data_movie.req.id));
    let obj = allmovies[ind];
    let equal = true;

    for(let i in data_movie.req){//validacion de la estructura del nuevo objeto
        if (!obj.hasOwnProperty(i)){
            equal = false;
            break;
        }
    }
    if (equal){
        allmovies[ind]=data_movie.req;
    }else{
        throw "Error de estructura de datos";
    }
}

const getMovieBy = (data_movie) => {

    if (!data_movie.req) throw new Error('errooor');
    data_movie.res = moviesModel.getMovieBy(data_movie.req);
    if (typeof data_movie.res =="undefined"){
        throw new Error('bla');
    }
}

export default {
   getAllMovies,
   getMovieById,
   removeMovie,
   createMovie,
   updateMovie,
   getMovieBy
}