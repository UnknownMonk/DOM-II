// Your code goes here
const nav = document.querySelectorAll('nav a');
const funbus = document.querySelector('.intro img');
const rickRoll = document.querySelector('#ashly');
const drag = document.querySelector('#drag ');
const right = document.querySelector('#right-click ');
const car1 = document.querySelector('#car1 ');
const car2 = document.querySelector('#car2 ');
const car3 = document.querySelector('#car3 ');
const opera = document.querySelector('#Opera ');
const green = document.querySelector('#green');
const bubble1 = document.querySelector('#bubble1');
const bubble2 = document.querySelector('#bubble2');
const goBuss = document.querySelector('.logo-heading');

//green sock

goBuss.addEventListener('click', bus);

function bus() {
  TweenMax.to('.funbuss', 10, { x: 2200 });
  let audio3 = new Audio('audio/Coolio - Fantastic Voyage-65 (1).mp3');
  audio3.play();
}

//picture click event and function #############################

funbus.addEventListener('click', toggle);

function toggle() {
  funbus.src = 'img/fun-bus.png';
}
//Horn Dblclick event and function #############################
nav.forEach(a => a.addEventListener('dblclick', horn));

function horn() {
  let audio = new Audio('audio/dixie-horn_daniel-simion.mp3');
  audio.play();
}
nav[3].addEventListener('click', e => {
  e.preventDefault();
});
//rick roll ####################
rickRoll.addEventListener('mouseover', roll);

function roll() {
  let audio2 = new Audio('audio/Never Gonna Give You Up Original.mp3');
  audio2.play();
  rickRoll.src = 'img/adventure.png';
}

//Drag event ####################
drag.addEventListener('drag', ashly);

function ashly() {
  drag.src =
    'https://steamusercontent-a.akamaihd.net/ugc/838084290654118276/4B36C5363BD280FADF3D95B3AB10510889D9C96D/';
}

//Right click ##############################

right.addEventListener('contextmenu', out);

function out() {
  right.src = 'img/destination.png';
}
///Cars event
car1.addEventListener('mousedown', car);

function car() {
  car1.textContent = 'YOU GET A CAR';
  car1.style.fontSize = '40px';
}

car2.addEventListener('mouseleave', secondCar);

function secondCar() {
  car2.textContent = 'YOU GET A CAR';
  car2.style.fontSize = '40px';
}

car3.addEventListener('dragend', thirdCar);

function thirdCar() {
  car3.textContent = 'AND YOU GET A CAR';
  car3.style.fontSize = '40px';
}

opera.addEventListener('dragover', yeah);

function yeah() {
  opera.src = 'https://media.giphy.com/media/COYggJB0KnADm/giphy.gif';
}

green.addEventListener('click', () => {
  green.style.color = 'green';
});

//bubbling

bubble1.addEventListener('click', e => {
  bubble1.style.color = 'red';
});

bubble2.addEventListener('click', e => {
  e.stopPropagation;
  bubble2.style.color = 'green';
});
