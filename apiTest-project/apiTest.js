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

$(document).ready(function() {
  $('.btn').on('click', function() {
    var $this = $(this);
    var loadingText = '<i class="spinner-border spinner-border-sm"></i> gutpunching...';
    if ($(this).html() !== loadingText) {
      $this.data('original-text', $(this).html());
      $this.html(loadingText);
    }
    setTimeout(function() {
      $this.html($this.data('original-text'));
    }, 1500);
  });
})


let joke = ''
let randTitle = ''
const getJoke = function(){
randTitle = myArray[Math.floor(Math.random() * myArray.length)]

let request = new XMLHttpRequest()
let url = "https://api.chucknorris.io/jokes/random"

request.open("GET", url, false)
request.send()

let response = request.response
let data = JSON.parse(response)

let joke = data.value
document.querySelector('#exampleModalCenterTitle').textContent = randTitle

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

// $(document).ready(function() {
//   $('.btn').on('click', function() {
//     var $this = $(this);
//     var loadingText = '<i class="spinner-border spinner-border-sm"></i> gutpunching...';
//     if ($(this).html() !== loadingText) {
//       $this.data('original-text', $(this).html());
//       $this.html(loadingText);
//     }
//     setTimeout(function() {
//       $this.html($this.data('original-text'));
//     }, 2000);
//   });
// })
