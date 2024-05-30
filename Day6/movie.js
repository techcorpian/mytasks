// 1. Movie

class Movie {
    constructor(title = '', studio = '', rating = 'PG'){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getPG(movies = [Movie]){
        const filteredArray = [];
        movies.forEach(movie => {
            if(movie.rating === 'PG'){
               filteredArray.push(movie);
            }
        });
        return filteredArray;
    }
}

const avengers = new Movie('Avengers', 'Marvel Studios', 'PG13');
const dc = new Movie('Dark Knight', 'DC Comics');
const ironman = new Movie('Iron Man', 'Marvel Studios');
const titanic = new Movie('Titanic', 'Sony', 'R');
const casinoRoyale = new Movie('Casino Royale', 'Eon Productions', 'PG13');

console.log(avengers.getPG([avengers, dc, ironman, titanic, casinoRoyale]));