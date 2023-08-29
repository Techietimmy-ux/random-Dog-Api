// https://dog.ceo/api/breeds/image/random
// .then -Promises
// asynchronous programming
const dogImageDiv = document.getElementById('dogImage')
const getDogDiv = document.getElementById('random')

const randomDog =()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        dogImageDiv.innerHTML=`<img src="${json.message}" alt="" width=500 height =500>`
    })

}

getDogDiv.onclick=()=>randomDog()