console.log("hello world")

let message = document.querySelector("#message")

const deleteMovie = (e) => {
    e.target.parentNode.remove()
    message.textContent = `${e.target.parentNode.firstChild.textContent} Removed!`
    revealMessage()
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
        message.textContent = `${e.target.textContent} Watched!`
    } else {
        message.textContent = `Added ${e.target.textContent} to Watchlist`
    }
    revealMessage()
}

function revealMessage() {
    message.classList.remove("hide") 

    setTimeout(() => {
        message.classList.add("hide")
    }, 1000)
}

document.querySelector('form').addEventListener('submit', addMovie)