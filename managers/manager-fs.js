import fs, { readFileSync } from 'fs';
//import moviesController from '../controllers/moviesController';

//aqui crear clase para instanciar un manager por cada json

//'./data/movies.json'

function movies(data){

    return JSON.parse(fs.readFileSync(data, "utf-8")); 
}
// afegiu codi per llegir './data/movies.json'

export default movies;

 //exportar clase manager en model i en model instanciar los objetos con los datos leidos de cada json
 //el model (CRUD) es el que tiene que conocer la estructura del json para tratarla
 //moviesModel tendra un constructor que creara un manager con el fichero json