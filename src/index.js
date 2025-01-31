const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log(event.target.children[1].value);
    const input = document.querySelector('input#searchByID');
    // console.log(input.value);
    // if (input.value >= 1 && input.value <= 3) {
    //   fetch(`http://localhost:3000/movies/${input.value}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     // console.log(data);
    //     const title = document.querySelector('section#movieDetails h4');
    //     const summary = document.querySelector('section#movieDetails p');
    //     title.innerText = data.title;
    //     summary.innerText = data.summary;
    //   })
    // } else {
    //   const title = document.querySelector('section#movieDetails h4');
    //   const summary = document.querySelector('section#movieDetails p');
    //   title.innerText = 'Please introduce a valid Movie ID (1 - 3)';
    //   summary.innerText = '';
    // }
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Status code error: " + response.status);
      }
    })
    .then(data => {
      const title = document.querySelector('section#movieDetails h4');
      const summary = document.querySelector('section#movieDetails p');
      title.innerText = data.title;
      summary.innerText = data.summary;
    })
    .catch(error => {
      // console.log(error);
      const title = document.querySelector('section#movieDetails h4');
      const summary = document.querySelector('section#movieDetails p');
      title.innerText = `${error}. Please introduce a valid Movie ID (1 - 3)`;
      summary.innerText = '';
    })
  })
}

document.addEventListener('DOMContentLoaded', init);