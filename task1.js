

const personMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
            
        while (personMovieDB.count == "" || personMovieDB.count == null || isNaN(personMovieDB.count)) {
            personMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }

        return personMovieDB.count;
    },
    writeGenres: function() {
        let i = 1;
        do{
            let answer = prompt(`Ваш любимый жанр под номером ${i}?`, '');

            if(answer !== null && answer != ""){
                personMovieDB.genres[i-1] = answer;
                i++;
            }
        }
        while(i < 4);

        // for (let i = 1; i < 4; i++ ) {
             
        //     let answer = prompt(`Ваш любимый жанр под номером ${i}?`, '');
        //     if(answer === null || answer == ""){
        //         let answer = prompt(`Ваш любимый жанр под номером ${i}?`, '');
        //         i--;
        //     } else {
        //         personMovieDB.genres[i-1] = answer;
        //     }
        // }

        personMovieDB.genres.forEach((value, index) => {
            console.log(`Жанр № ${index + 1}- это ${value}`);
        });
    },
    detectLevel: function() {
        if (personMovieDB.count < 10) {
            console.log('Мало фильмов');
        } else if(personMovieDB.count < 30 ){
            console.log('Вы средний зритель');
        } else if(personMovieDB.count > 30 ){
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    }, 
    showMyDB: function() {
        if (personMovieDB.private==false) {
            console.log(personMovieDB);
            console.log('Great work!');
        } else {
            console.log('error!');
        }
    },
    rememberMyFilms: function() {
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
    },

    toggleVis: function(){
        if(personMovieDB.private === false){
            personMovieDB.private = true;
        } else {
            personMovieDB.private = false;
        }
    }
};





// detectLevel();



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

// rememberMyFilms();



console.log(personMovieDB);