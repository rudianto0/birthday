let index = 0;
const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
const button = document.querySelector(".btn");
const totalSlides = slides.length;

function nextSlide() {
  if (index < totalSlides - 1) {
    index++;
    slider.style.transform = `translateX(-${index * 100}vw)`;
  }

  // Jika sudah di slide terakhir, sembunyikan button
  if (index === totalSlides - 1) {
    button.style.display = "none";
  }
}
