let request = new XMLHttpRequest()
let url = "https://api.chucknorris.io/jokes/random"

request.open("GET", url, false)
request.send()

let response = request.response
let data = JSON.parse(response)

let joke = data.value
console.log(data.value);

document.querySelector('#rocketButton').addEventListener('click', function(e){
  document.querySelector('#grenadeBox').textContent = joke
})
