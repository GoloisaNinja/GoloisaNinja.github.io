const myArray = [
  'Rocket Launcher Jock Strap',
  'Bicep Lightning Bullets',
  'Shotgun Bowling Heavy Bag',
  'Delta Force Roundhouse Suplex',
  'Windshield Throat Kick',
  'Ninja Car Bomb Karate Chop',
  'T-Rex Melting Throat Punch',
  'Shark With Chest Hair',
  'Chainsaw Porterhouse'
]

document.querySelector('#loadingMain').style.visibility = "hidden"
document.querySelector('#loadingSupp').style.visibility = "hidden"
let joke = ''
let randTitle = ''
const getJoke = function(){
randTitle = myArray[Math.floor(Math.random() * myArray.length)]
document.querySelector('#loadingMain').style.visibility = "visible"
document.querySelector('#loadingSupp').style.visibility = "visible"
let request = new XMLHttpRequest()
let url = "https://api.chucknorris.io/jokes/random"

request.open("GET", url, false)
request.send()

let response = request.response
let data = JSON.parse(response)

let joke = data.value
document.querySelector('#exampleModalCenterTitle').textContent = randTitle
document.querySelector('#loadingMain').style.visibility = "hidden"
document.querySelector('#loadingSupp').style.visibility = "hidden"
document.querySelector('#grenadeBox').textContent = joke
console.log(joke);
console.log(randTitle);
}

document.querySelector('#rocketButton').addEventListener('click', function(e){
  getJoke()
})

document.querySelector('#ballsBasket').addEventListener('click', function(e){
  getJoke()
})
