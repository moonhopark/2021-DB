const range = document.getElementById('js-range');
const number = document.getElementById('js-number');
const guess = document.getElementById('guess');
const button = document.getElementById('button');
const result = document.getElementById('js-result');

console.log(result.querySelector('span'));

range.addEventListener('change', e => {
  number.innerHTML = range.value;
  guess.max = range.value;
});

guess.addEventListener('change', e => {
  guess.value = e.target.value;
});

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
};

const onClick = e => {
  e.preventDefault();
  const number = getRandomIntInclusive(0, range.value);
  const myNumber = guess.value;

  const span = result.querySelector('span');
  if (number > myNumber) {
    span.innerHTML = `
      You choose: ${myNumber}, the machine choose: ${number}.
      You Lose!
    `;
  } else if (number < myNumber) {
    span.innerHTML = `
      You choose: ${myNumber}, the machine choose: ${number}. 
      You Win!
    `;
  } else {
    span.innerHTML = `
      You choose: ${myNumber}, the machine choose: ${number}.
      Draw!
    `;
  }
};

button.addEventListener('click', onClick);
