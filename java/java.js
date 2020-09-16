const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Один из последних просмотренных фильмов?"),
                b = prompt("На сколько оцените его?");

            if (a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("Good!");
            } else {
                console.log("Error");
                i--;
            }

        }

    },
    detectPersonalLevel: function () {
        if (personalMovieDB["count"] < 10) {
            console.log("Просмотрено довольно мало фильмов!");
        } else if (personalMovieDB["count"] >= 10 && personalMovieDB["count"] <= 30) {
            console.log("Вы классический зритель!");
        } else if (personalMovieDB["count"] > 30) {
            console.log("Вы киноман!");
        } else {
            console.log("Произошла ошибка =(");
        }
    },
    showMyDB: function () {
        if (!personalMovieDB) {
            console.log(personalMovieDB);
            console.log("Сработало!")
        }
    },
    writeYourGenres: function () {
        let film;
        for (let i = 1; i < 4; i++) {
            film = prompt(`Ваш любимый жанр под номером ${i}`);
            if (film === "" || film === null) {
                i--;
                continue;
            }
            personalMovieDB.genres[i - 1] = film;
        }
        personalMovieDB.genres.forEach(function (item, index, arr) {
            console.log(`Любимый жанр ${index + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },



};



personalMovieDB.writeYourGenres();