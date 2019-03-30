let joke = ''
const getJoke = function(){

let request = new XMLHttpRequest()
let url = "https://api.chucknorris.io/jokes/random"

request.open("GET", url, false)
request.send()

let response = request.response
let data = JSON.parse(response)

let joke = data.value
document.querySelector('#grenadeBox').textContent = joke
console.log(joke);
}

document.querySelector('#rocketButton').addEventListener('click', function(e){
  getJoke()
})

document.querySelector('#ballsBasket').addEventListener('click', function(e){
  getJoke()
})
