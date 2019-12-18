document.addEventListener("DOMContentLoaded", () => {
  let movies = document.getElementById("movies");
  //   let sliderMovies = document.getElementById("cards");

  function fetchMovies() {
    fetch("http://api.tvmaze.com/shows")
      .then(res => res.json())
      .then(data => {
        data.forEach(movie => {
          let card = document.createElement("div");
          card.className = "card";
          let img = document.createElement("img");
          img.src = movie.image.medium;
          let h3 = document.createElement("h3");
          h3.innerHTML = movie.name;
          card.appendChild(img);
          card.appendChild(h3);
          movies.appendChild(card);
        });
      })
      .catch(err => console.log(err));
  }
  fetchMovies();

  //   function fetchSliderMovies() {
  //     fetch("http://api.tvmaze.com/shows")
  //       .then(res => res.json())
  //       .then(data => {
  //         let slideArray = [];
  //         for (let i = 0; i < 11; i++) {
  //           slideArray.push(data[i]);
  //         }
  //         slideArray.forEach(movie => {
  //           let card = document.createElement("div");
  //           card.className = "card-item";
  //           let img = document.createElement("img");
  //           img.src = movie.image.medium;
  //           let h3 = document.createElement("h3");
  //           h3.innerHTML = movie.name;
  //           card.appendChild(img);
  //           card.appendChild(h3);
  //           sliderMovies.appendChild(card);
  //         });
  //       })
  //       .catch(err => console.log(err));
  //   }
  //   fetchSliderMovies();
});
