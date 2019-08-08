console.log('%c HI', 'color: firebrick')

const url = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchDogs() {
    return fetch(url)
    .then(resp => resp.json())
    .then(json => {
        renderDogs(json)
    })
}

function fetchDogBreeds() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        renderDogBreeds(json)
        clickBreed()
    })
}

function renderDogs(json) {
    const list = document.querySelector('div#dog-image-container')
    json.message.forEach(image => {
        const p = document.createElement('p')
      p.innerHTML = `<img src=${image} alt=""></img>`
      list.appendChild(p)
    })
}

function renderDogBreeds(json) {
    const breedList = document.getElementById("dog-breeds")
        for (breed in json.message){
        const li = document.createElement("li")
        li.innerText =  `${breed}`
        li.className = "dog"
        breedList.appendChild(li)
    }
    breedList.addEventListener("click", (e) => {
        e.target.style.color = "red"
    })
    
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDogs()
    fetchDogBreeds()
})




