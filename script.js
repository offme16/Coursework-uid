function createSlider(sliderClass, nextBtnId, prevBtnId, slideWidth, maxLeft) {
  const slideR = document.getElementById(nextBtnId);
  const slideL = document.getElementById(prevBtnId);
  const polosa = document.querySelector(sliderClass);
  let left = 0;

  slideR.addEventListener("click", () => {
    left -= slideWidth;
    left < maxLeft ? (left = 0) : "";
    polosa.style.left = left + "px";
  });

  slideL.addEventListener("click", () => {
    left += slideWidth;
    left > 0 ? (left = 0) : "";
    polosa.style.left = left + "px";
  });
}
// Premier slider
createSlider(".premier-slider", "pre-nextbtn", "pre-prevbtn", 1150, -6900);

// Film slider
createSlider(".films-slider", "film-nextbtn", "film-prevbtn", 350, -1900);

// Top slider
createSlider(".top-month__slider", "tm-nextbtn", "tm-prevbtn", 350, -2100);

const openModalBtn = document.getElementById("queryfooter");
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeModal");
function openModal() {
  modal.style.display = "block";
}
openModalBtn.addEventListener("click", openModal);
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
