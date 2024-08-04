// CHANGE NAV BACKGROUND ON SCROLL
window.addEventListener('scroll', () =>(
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>0)
))

// NUMBER COUNT UP
// let counter = document.getElementById('conut');
let counter = 8900;

function updateCounter(){
    console.log(counter)
}
updateCounter()

// slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
  //   when window width is >= 600
    breakpoints: {

        600: {
            slidesPerView: 2
        },
        800: {
            slidesPerView: 3
        },
        1200:{
            slidesPerView:4
        },
    }
  });
  // 
  const firstIcon = document.querySelectorAll('.answer')
  const paragraph = document.querySelectorAll('.para')

  const update = () => {
    paragraph.forEach(frag =>{
      frag.classList.toggle('open')
    })
  }

  firstIcon.forEach(first =>{
    first.addEventListener('click', () =>{
      first.classList.toggle('open');
    })
  })

  // MENU MEDIA SCREEN
  const menu = document.querySelector(".nav-list")
  const open = document.querySelector("#open-menu-btn")
  const close = document.querySelector("#close-menu-btn")

  open.addEventListener('click', () =>{
    menu.style.display = 'flex';
    open.style.display = 'none';
    close.style.display = 'inline-block';
  })
  close.addEventListener('click', () =>{
    menu.style.display = 'none';
    open.style.display = 'inline-block';
    close.style.display = 'none';
  })
  
 