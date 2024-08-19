document.addEventListener("DOMContentLoaded", function () {
  // Табы
  const tabs = document.querySelectorAll(".tabs__button");
  const panels = document.querySelectorAll(".product__panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("tabs__button--active"));
      panels.forEach((panel) =>
        panel.classList.remove("product__panel--active")
      );

      tab.classList.add("tabs__button--active");
      document
        .getElementById(tab.getAttribute("data-tab"))
        .classList.add("product__panel--active");
    });
  });

  // Слайдер

  const swiper = new Swiper(".swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
    },
  });

  // Функция для проверки видимости слайдов и активации/деактивации Swiper
  function checkSwiperStatus() {
    const swiperContainer = document.querySelector(".swiper-container");
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    const swiperSlides = document.querySelectorAll(".swiper-slide");

    // Проверяем ширину слайдов и контейнера
    const swiperContainerWidth = swiperContainer.offsetWidth;
    const swiperWrapperWidth = Array.from(swiperSlides).reduce(
      (acc, slide) => acc + slide.offsetWidth,
      0
    );

    // Если ширина слайдера больше ширины контейнера, активируем Swiper
    if (swiperWrapperWidth > swiperContainerWidth) {
      swiper.enable();
    } else {
      swiper.disable();
    }
  }

  // Проверяем состояние слайдера при загрузке и при изменении размера окна
  window.addEventListener("load", checkSwiperStatus);
  window.addEventListener("resize", checkSwiperStatus);
});
