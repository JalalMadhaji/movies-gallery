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
jQuery('.fp-slider-items').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
{
    breakpoint: 992,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 2
   }
},
{
    breakpoint: 600,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
   }
},
{
    breakpoint: 480,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
   }
}
       // You can unslick at a given breakpoint now by adding:
       // settings: "unslick"
       // instead of a settings object
     ]
   });
