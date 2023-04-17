// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    let allDirectors = moviesArray.map( (eachMovie) => {
    let newDirectorsArray = eachMovie.director;
        
        return newDirectorsArray
       
    })
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    let filteredMovies = moviesArray.filter((eachMovie) => {
        if (eachMovie.genre.includes('Drama') === true && eachMovie.director === 'Steven Spielberg') //! No sé si hay un método más acertado que .includes() pero fue el primero en el que 
        {                                                                                            //! pensé para poder crear una condición 
            return true
        }
        else
        {
            return false
        }  
    })
    return filteredMovies.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
let totalScore = moviesArray.reduce((acc, eachMovie)=>
{
if (moviesArray.length === 0)
{
  return 0
}
else 
{    
 return acc + eachMovie.score
}
    
  } , 0 )

  let averageScore = totalScore/moviesArray.length;
  let roundedScore = averageScore.toFixed(2)
  return +roundedScore
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    let dramaMovies = moviesArray.filter((eachMovie) => {
        if (eachMovie.genre.includes('Drama') === true)
        {
            return eachMovie;
        }
    })

    let totalScore = moviesArray.reduce((acc, eachMovie)=>
    {
    if (moviesArray.length === 0)
    {
      return 0
    }
    else if(eachMovie.genre.includes('Drama') === true)
    {    
     return acc + eachMovie.score
    }
    else if (eachMovie.genre.includes('Drama') === false){
        return acc
    }
      } , 0)
 
      let averageScore = totalScore/moviesArray.length;
      let roundedScore = averageScore.toFixed(2)
      return +roundedScore
    }


    //! En este ejercicio no conseguí que solo contase las películas de genero drama. Intenté filtrar antes el array de películas y después usar
    //! el método reduce para conseguir solo las puntuaciones de las películas de genero drama pero no obtive resultado

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let cloneArray = JSON.parse(JSON.stringify(moviesArray))
     
    let sortedArray = cloneArray.sort((elem1, elem2) =>
    {
        if (elem1.year > elem2.year)
        {
            return 1 
        }
        else if (elem1.year < elem2.year)
        {
            return -1 
        }
       else {
 
        if (elem1.title < elem2.title)
         {
            return -1;
          } 
          else if (elem1.title > elem2.title) 
          {
            return 1;
          } else 
          {
            return 0;
          }
        }
    })

    return sortedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
 let cloneArray = JSON.parse(JSON.stringify(moviesArray))
 let orderedArray = cloneArray.sort((elem1, elem2)=>{

if (elem1.title > elem2.title ) 
{ 
    return -1
}

else if (elem1.title < elem2.title ) 
  {
        return 1
 }
else {
    return 0
}

 })
 return orderedArray.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
