import http from "../http-common";

const getAllMovies = () =>{
    return http.get("/movies").then((res) => {
      return res
    });
}

const MovieService = {
    getAllMovies
};
export default MovieService;