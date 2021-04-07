const numverOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
const personMovieDB = {
    count: numverOfFilms,
    movies: {},
    actors: {},
    genres: [],
    pricate: false
};

if (numverOfFilms < 10) {
    console.log('Мало фильмов');
} else if(numverOfFilms < 30 ){
    console.log('Вы средний зритель');
} else if(numverOfFilms > 30 ){
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

// const firstMovie = prompt('Один из последних просмотренных фильмов?', ''),
//     firstReview = prompt('На сколько его оцените?'),
//     secondMovie = prompt('Один из последних просмотренных фильмов?', ''),
//     secondReview = prompt('На сколько его оцените?');

// personMovieDB.movies[firstMovie] = firstReview;
// personMovieDB.movies[secondMovie] = secondReview;




// for (let i=0; i < 1; i++) {
//     let Movie = prompt('Один из последних просмотренных фильмов?', ''),
//         Review = prompt('На сколько его оцените?');

//     if (Movie == "" ||  Review == 0 || Movie.length > 50) {
//         console.log('Error');
//         i=0;
//         continue;
//     } else {
//         personMovieDB.movies[Movie] = Review;
//     }    
// }

// let i = 0;

// while (i < 2) {
//     let Movie = prompt('Один из последних просмотренных фильмов?', ''),
//         Review = prompt('На сколько его оцените?');
//     if (Movie == "" ||  Review == 0 || Movie.length > 50) {
//         console.log('Error');
//     } else {
//         personMovieDB.movies[Movie] = Review;
//         i++;
//     }    
// }

// do {
//     let Movie = prompt('Один из последних просмотренных фильмов?', ''),
//         Review = prompt('На сколько его оцените?');

//     if (Movie == "" ||  Review == 0 || Movie.length > 50) {
//         console.log('Error');
//     } else {
//         personMovieDB.movies[Movie] = Review;
//         i++;
//     }
// }
// while (i < 2);

for (let i=0; i < 2; i++ ) {
    let Movie = prompt('Один из последних просмотренных фильмов?', ''),
         Review = prompt('На сколько его оцените?');

    if (Movie == "" ||  Review == 0 || Movie == null ||  Review == null || Movie.length > 50) {
        console.log('Error');
        i--;
        console.log(i);
    } else {
        personMovieDB.movies[Movie] = Review;
    }
}

console.log(personMovieDB);