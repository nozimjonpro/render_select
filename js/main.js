var elFilmList = document.querySelector('.films__list');
var elFilmTemplate = document.querySelector('#film__template').content;
var elGenreTemplate = document.querySelector('#genre__template').content;
var elFilmSelect = document.querySelector('.film__select');


function renderSelect(array, select){

    var result = [];
    
    array.forEach(film=>{
        film.genres.forEach(genre=>{
            if(!result.includes(genre)){
                result.push(genre)
            }
        })
    })

    result.forEach(newGenre=>{
        var newOption = document.createElement('option');
        newOption.textContent = newGenre;
        select.appendChild(newOption);
    })
   
    };
    
renderSelect(films, elFilmSelect)

var renderGenres = (array, element)=>{
element.innerHTML = null;

array.forEach(genre=>{
    var genreTemplate = elGenreTemplate.cloneNode(true);
    genreTemplate.querySelector('.film__genre').textContent = genre;
    element.appendChild(genreTemplate)
})
}

var renderFilms = (array, element)=>{
    element.innerHTML = null;
    array.forEach((film)=>{
        var filmTemplate = elFilmTemplate.cloneNode(true);
        filmTemplate.querySelector('.film__heading').textContent = film.title
        filmTemplate.querySelector('.film__image').src = film.poster;
        filmTemplate.querySelector('.film__overview').textContent = film.overview;
        filmTemplate.querySelector('.film__time').textContent = film.release_date;
    
        
        var elGenres = filmTemplate.querySelector('.film__genres');
        renderGenres(film.genres, elGenres)
        element.appendChild(filmTemplate)
    })
}

renderFilms(films, elFilmList)