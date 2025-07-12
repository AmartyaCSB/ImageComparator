const slider = document.querySelector('.image-comparision .slider');
const RGB = document.querySelector('.image-comparision .RGB');
const sliderLine = document.querySelector('.image-comparision .slider-line');
const sliderIcon = document.querySelector('.image-comparision .slider-icon');


slider.addEventListener("input", (e) => {
  let sliderValue = e.target.value + "%";

  RGB.style.width = sliderValue;
  sliderLine.style.left = sliderValue;
  sliderIcon.style.left = sliderValue;
});
