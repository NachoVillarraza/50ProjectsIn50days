const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokebtn');

jokeBtn.addEventListener('click', getJoke);

getJoke();

// Fetch con Async/Await

async function getJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();
  jokeElement.innerHTML = data.joke;
}

// Fetch con Then

// function getJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => (jokeElement.innerHTML = data.joke));
// }
