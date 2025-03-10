document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = new bootstrap.Carousel(document.querySelector("#carouselExampleRide"), {
      interval: 4000,
      ride: "carousel"
    });
  });