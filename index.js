// Remember to import the data and Dog class!
import { dogs } from './data.js'
import { Dog } from '/Dog.js'

let currentDogIndex = 0
let currentDog = new Dog(dogs[currentDogIndex])

function getNewDog(){
    if (currentDogIndex < dogs.length - 1){
        currentDogIndex += 1
        currentDog = new Dog(dogs[currentDogIndex])
        render()
    } else {
        document.getElementById('tinder-profile').innerHTML = `<div class='finish'>no more matches`
    }
    
}

function like(){
    if (!currentDog.hasBeenSwiped){
        document.getElementById('badge-like').style.display = 'block'
        currentDog.changeStatus(true)
        setTimeout(getNewDog, 2000)
    }
}

function dislike(){
    if (!currentDog.hasBeenSwiped){
        document.getElementById('badge-nope').style.display = 'block'
        currentDog.changeStatus(false)
        setTimeout(getNewDog, 2000)
    }
}

function render(){
    document.getElementById('tinder-profile').innerHTML = currentDog.setProfileHtml()
}

document.getElementById('like-btn').addEventListener('click', like)
document.getElementById('dislike-btn').addEventListener('click', dislike)
render()





