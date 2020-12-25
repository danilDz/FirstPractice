'use strict';

let numberOfFilms;

numberOfFilms=prompt('Сколько фильмов вы уже посмотрели?');

let personalMovieDB={
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

let movie1,
    movie2,
    rate1,
    rate2;
movie1=prompt('Один из последних просмотренных фильмов.');
rate1=prompt('На сколько вы его оцените?');
movie2=prompt('Один из последних просмотренных фильмов.');
rate2=prompt('На сколько вы его оцените?');

personalMovieDB={
    movies:{
        movie1:rate1,
        movie2:rate2
    }
};

console.log(personalMovieDB);