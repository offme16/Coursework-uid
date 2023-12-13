const burger = document.querySelector(".burger");
const navigateItems = document.querySelector(".navigate-item");

// Добавляем слушателя события на клик по бургеру
burger.addEventListener("click", function () {
  // Переключаем класс 'active' для показа/скрытия навигационного меню
  navigateItems.classList.toggle("active");
});
