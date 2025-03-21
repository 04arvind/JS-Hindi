const form = document.querySelector('form');

// This usecase will give you empty :
//  const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const display = document.querySelector('#display');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  // results.innerHTML = `${height}`
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result :
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi <= 18.5) {
      display.innerHTML = `<h2>You are under weight </h2>`;
      display.style.color = 'red';
    }
    if (bmi >= 18.6 && bmi <= 24.8) {
      display.innerHTML = `<h2>Your weight is in Normal range</h2>`;
      display.style.color = 'green';
    }
    if (bmi > 24.8) {
      display.innerHTML = `<h2>You are Overweight </h2>`;
      display.style.color = 'red';
    }
  }
});
