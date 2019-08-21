$(document).ready(function() {
  $('.btn').on('click', function() {
    var $this = $(this);
    var loadingText = '<i class="spinner-border spinner-border-sm"></i> growing beard';
    if ($(this).html() !== loadingText) {
      $this.data('original-text', $(this).html());
      $this.html(loadingText);
      setTimeout(function () {
        $this.prop("disabled", true)
      }, 15)
    }
    setTimeout(function() {
      $this.html($this.data('original-text')).prop("disabled", false);
    }, 1000);
  });
})

// $(document).ready(function() {
//     $("#btnFetch").click(function() {
//       // disable button
//       $(this).prop("disabled", true);
//       // add spinner to button
//       $(this).html(
//         `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...`
//       );
//     });
// });

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

let joke = ''
let randTitle = ''
let main = ''

const getJoke = async function(){
  randTitle = myArray[Math.floor(Math.random() * myArray.length)]
  const response = await fetch('https://api.icndb.com/jokes/random')
  let data = await response.json()
  console.log(data);
  let joke = data.value.joke
}

document.querySelector('#rocketButton').addEventListener('click', function(e){
  getJoke()
  document.querySelector('#exampleModalCenterTitle').textContent = randTitle
  document.querySelector('#grenadeBox').textContent = joke
  console.log(joke);
  console.log(randTitle);
})

document.querySelector('#ballsBasket').addEventListener('click', function(e){
  getJoke()
  document.querySelector('#exampleModalCenterTitle').textContent = randTitle
  document.querySelector('#grenadeBox').textContent = joke
  console.log(joke);
  console.log(randTitle);
})

// non functioning code simply keeping for reference
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

// const getResponse = async function () {
//
// let request = new XMLHttpRequest()
// let url = "https://api.chucknorris.io/jokes/random"
//
// request.open("GET", url, true)
// request.send()
//
// const response = await request
//
// let main = request.response
// return main
// }
// getResponse()
// console.log(main);
// let data = JSON.parse(main)
// let joke = data.value
