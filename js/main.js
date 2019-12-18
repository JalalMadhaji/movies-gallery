document.addEventListener("DOMContentLoaded", () => {
  let movies = document.getElementById("movies");

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
});
