console.log("hello world")

let message = document.querySelector("#message")

const deleteMovie = (e) => {
    e.target.parentNode.remove()
    message.textContent = "Movie Deleted!"
}

const addMovie = (e) => {
    e.preventDefault()

    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
    
    movie.appendChild(movieTitle)
    movie.appendChild(deleteBtn)

    deleteBtn.addEventListener('click', deleteMovie)

    document.querySelector('ul').appendChild(movie)
    inputField.value = ""
}

function crossOffMovie(e) {
    e.target.classList.toggle("checked")
    if (e.target.classList.contains("checked")) {
        message.textContent = "Movie Watched!"
    } else {
        message.textContent = "Added to Watchlist"
    }
}

document.querySelector('form').addEventListener('submit', addMovie)