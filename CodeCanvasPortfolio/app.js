const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a')
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',() => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = '#29323c';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".project-carousel-container");
  const prevBtn = document.getElementById("prvBtn");
  const nextBtn = document.getElementById("nxtBtn");

  let currentIndex = 0;

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
      scrollSectionToTop();
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentIndex < container.children.length - 1) {
      currentIndex++;
      updateCarousel();
      scrollSectionToTop();
    }
  });

  function updateCarousel() {
    const translateValue = -currentIndex * 100 + "%";
    container.style.transform = "translateX(" + translateValue + ")";
  }

  function scrollSectionToTop() {
    container.scrollIntoView({ behavior: "smooth" });
  }
});

