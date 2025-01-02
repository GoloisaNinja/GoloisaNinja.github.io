const myArray = [
	'Rocket Launcher Jock Strap',
	'Bicep Lightning Bullets',
	'Shotgun Bowling Heavy Bag',
	'Delta Force Roundhouse Suplex',
	'Windshield Throat Kick',
	'Ninja Car Bomb Karate Chop',
	'T-Rex Melting Throat Punch',
	'Shark With Chest Hair',
	'Chainsaw Porterhouse',
];

let joke = '';
let randTitle = '';
let data = '';
let beardCheck = document.querySelector('#rocketButton');
let beardCount = 0;

beardCheck.onclick = function () {
	beardCount++;
};

const getJoke = async function () {
	const cats = [
		'animal',
		'career',
		'celebrity',
		'dev',
		'fashion',
		'food',
		'history',
		'money',
		'movie',
		'music',
		'political',
		'religion',
		'science',
		'sport',
		'travel',
	];
	const category = cats[Math.floor(Math.random() * cats.length)];
	randTitle = myArray[Math.floor(Math.random() * myArray.length)];
	const response = await fetch(
		`https://api.chucknorris.io/jokes/random?category=${category}`
	);
	data = await response.json();
	joke = data.value;
	joke = joke.replace(/&quot;/g, '"');
	return joke;
};

getJoke();

// document.querySelector('#exampleModalCenterTitle').textContent = randTitle
// document.querySelector('#grenadeBox').textContent = joke

$(document).ready(function () {
	$('.btn').on('click', function () {
		var $this = $(this);
		var loadingText =
			'<i class="spinner-border spinner-border-sm"></i> growing beard';
		if ($(this).html() !== loadingText) {
			$this.data('original-text', $(this).html());
			$this.html(loadingText);
			setTimeout(function () {
				$this.prop('disabled', true);
			}, 15);
		}
		setTimeout(function () {
			$this.html($this.data('original-text')).prop('disabled', false);
		}, 1000);
	});
});

const fillModal = async function () {
	await getJoke();
	document.querySelector('#exampleModalCenterTitle').textContent = randTitle;
	document.querySelector('#grenadeBox').textContent = joke;
	console.log(joke);
	console.log(randTitle);
};

document.querySelector('#rocketButton').addEventListener('click', function (e) {
	if (beardCount == 1) {
		document.querySelector('#exampleModalCenterTitle').textContent = randTitle;
		document.querySelector('#grenadeBox').textContent = joke;
	} else {
		fillModal();
	}
});

document.querySelector('#ballsBasket').addEventListener('click', function (e) {
	fillModal();
});
