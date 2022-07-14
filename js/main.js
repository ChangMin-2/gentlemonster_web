const header = document.querySelector('.header')

header.addEventListener('mouseover',function(){
  header.classList.add('hover')
})
header.addEventListener('mouseleave',function(){
  header.classList.remove('hover')
  searchArea.style.display = 'none'
  searchState = false
})

window.addEventListener('scroll',function(){
  if(window.scrollY > 100) {
    header.classList.add('scroll')
  }else {
    header.classList.remove('scroll')
  }
})

const searchBtn = document.querySelector('.search__btn')
const searchArea = document.querySelector('.search-area')
let searchState = false

searchBtn.addEventListener('click',function(){
  searchState = !searchState

  if(searchState) {
    searchArea.style.display = 'block'
  }else {
    searchArea.style.display = 'none'
  }
})

// visual swiper
const visualPause = document.querySelector('.pause');
const visualStart = document.querySelector('.start');

const visualSwiper = new Swiper(".visual .swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay:5000
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: ".visual .swiper-pagination",
    clickable: true,
  },
});

visualPause.addEventListener('click',function(){
  visualSwiper.autoplay.stop();
  visualPause.style.display = 'none';
  visualStart.style.display = 'block';
})
visualStart.addEventListener('click',function(){
  visualSwiper.autoplay.start();
  visualPause.style.display = 'block';
  visualStart.style.display = 'none';
})

// ranking
const rankEls = document.querySelectorAll('.rank li');
const ranking = document.querySelector('.rank');
const hoverAreaImg = document.querySelectorAll('.img-hover-area');

ranking.addEventListener('mouseleave',function(){
  rankEls[0].classList.add('hover')
  hoverAreaImg[0].style.display = 'flex'
})

rankEls.forEach(function(rankEl,index){
  rankEl.addEventListener('mouseover',function(){
    rankEls[0].classList.remove('hover')
    hoverAreaImg[0].style.display = 'none'
    rankEl.classList.add('hover')
    if(rankEl.classList.contains('hover')){
      hoverAreaImg[index].style.display = 'flex'
    }
  })
  rankEl.addEventListener('mouseleave',function(){
    rankEl.classList.remove('hover')
    if(!rankEl.classList.contains('hover')){
      hoverAreaImg[index].style.display = 'none'
    }
  })
})


// product
var productSwiper = new Swiper(".product__swiper", {
  slidesPerView: 8,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  autoplay: {
    delay:3000
  },
  speed : 1000,
});

const productTab01 = document.querySelector('.product__tab-01')
const productTab02 = document.querySelector('.product__tab-02')
const productSun = document.querySelector('.sunglasses'); 
const productGla = document.querySelector('.glasses'); 


productTab01.addEventListener('click',function(){
  productTab01.style.color = '#000'
  productTab01.style.fontWeight = 'bold'
  productTab02.style.color = '#757575'
  productTab02.style.fontWeight = '400'
  productSun.style.display = 'block'
  productGla.style.display = 'none'
})

productTab02.addEventListener('click',function(){
  productTab02.style.color = '#000'
  productTab02.style.fontWeight = 'bold'
  productTab01.style.color = '#757575'
  productTab01.style.fontWeight = '400'
  productSun.style.display = 'none'
  productGla.style.display = 'block'
})

// collabo
const collaboSec = document.querySelector('.collabo-container');
const collabos = document.querySelectorAll('.collabo-wrap');

collabos.forEach(function(collabo){
  collabo.addEventListener('mouseenter',function(){
    collabos[0].classList.remove('hover')
    collabo.classList.add('hover');

  })
  collabo.addEventListener('mouseleave',function(){
    collabo.classList.remove('hover');
    collabos[0].classList.add('hover')
  })
})
// collaboSec.addEventListener('mouseleave',function(){
//   collabos[0].classList.add('hover')
// })

// sns
const sns = document.querySelector('.sns')
const left01 = document.querySelector('.left01');

sns.addEventListener('mouseover',function(){
  left01.style.transform = 'translateX(-252)';
})






