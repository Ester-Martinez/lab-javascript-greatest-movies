// // /* eslint no-restricted-globals: 'off' */

// // // Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  let output = movies.reduce((ac, cu) => ac + +cu.rate, 0) / movies.length;
  let average = +output.toFixed(2);
  return average;
}

// // Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  const filteredMovies = movies.filter(el => el.genre.includes("Drama"))
  ;
  if (filteredMovies.length === 1) {
    return +filteredMovies[0].rate.toFixed(2);
  }
  if (filteredMovies.length === 0) {
    return 0;
  }
  let output = filteredMovies.reduce((ac, cu) => ac + +cu.rate, 0) / filteredMovies.length;
  let average = +output.toFixed(2);
  return average;
}

// // Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movies) {
  let sortedMoviesByDuration = movies.sort((a, b) => {
        if (a.duration > b.duration)  return 1
        if (a.duration < b.duration)  return -1
        if (a.duration === b.duration) {(a.name < b.name) }return -1})

return sortedMoviesByDuration;
}
// // Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

// // Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// // Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// // BONUS Iteration: Best yearly rate average - Best yearly rate average
