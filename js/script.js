document.addEventListener("DOMContentLoaded", function () {
  var carouselAmeno = new bootstrap.Carousel(document.querySelector("#carouselAmeno"), {
      interval: 4000,
      ride: "carousel"
  });

  var carouselCoolStreet = new bootstrap.Carousel(document.querySelector("#carouselCoolStreet"), {
      interval: 4000,
      ride: "carousel"
  });
});
function flipCard(card) {
  card.classList.toggle("flip");
}


