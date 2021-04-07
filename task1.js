const numverOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
const personMovieDB = {
    count: numverOfFilms,
    movies: {},
    actors: {},
    genres: [],
    pricate: false
};

const firstMovie = prompt('Один из последних просмотренных фильмов?', ''),
    firstReview = prompt('На сколько его оцените?'),
    secondMovie = prompt('Один из последних просмотренных фильмов?', ''),
    secondReview = prompt('На сколько его оцените?');

personMovieDB.movies[firstMovie] = firstReview;
personMovieDB.movies[secondMovie] = secondReview;

console.log(personMovieDB);