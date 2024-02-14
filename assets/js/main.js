// document.addEventListener("DOMContentLoaded", function() {
//   const sliderContainer = document.querySelector('.slider-container');
//   const slides = document.querySelectorAll('.slider');
//   let slideIndex = 0;
//   const totalSlides = slides.length;
//   const slideWidth = slides[0].offsetWidth;

//   function nextSlide() {
//     slideIndex++;
//     if (slideIndex >= totalSlides) {
//       slideIndex = 0;
//     }
//     updateSliderPosition();
//   }

//   function updateSliderPosition() {
//     sliderContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
//   }

//   setInterval(nextSlide, 5000); // Adjust the timing as needed (in milliseconds)
// });
