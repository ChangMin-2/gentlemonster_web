// header
const header = document.querySelector('.header')
const headerScroll = document.querySelector('.header.scroll')
const lnb = document.querySelector('.lnb')

lnb.addEventListener('mouseover',function(){
  header.style.height = '500px'
})
lnb.addEventListener('mouseout',function(){
  header.style.height = '65px'
})

// cart
const cartOpenBtn = document.querySelector('.shopping_cart-icons');
const cartClose = document .querySelector('.cart-close-icons')
const cart = document.querySelector('.cart');

cartOpenBtn.addEventListener('click',function(){
  cart.style.width = '400px'
  cartOpenBtn.style.display = 'none'
  cartClose.style.display = 'block'
})
cartClose.addEventListener('click',function(){
  cart.style.width = '0px'
  cartOpenBtn.style.display = 'block'
  cartClose.style.display = 'none'
})

// search 
const searchOpenBtn = document.querySelector('.search-icons');
const searchClose = document.querySelector('.search-close-icons')
const search  = document.querySelector('.search');

searchOpenBtn.addEventListener('click',function(){
  search.style.height = '600px'
  searchOpenBtn.style.display = 'none'
  searchClose.style.display = 'block'
})
searchClose.addEventListener('click',function(){
  search.style.height = '0'
  searchOpenBtn.style.display = 'block'
  searchClose.style.display = 'none'
})

// fixed-btn
const topBtn = document.querySelector('.to-top');

topBtn.addEventListener('click', ()=>{
  //gsap.to(요소, 시간, 애니메이션옵션{객체데이터}})
  gsap.to(window, 0.5, {
    scrollTo: 0
  })
})

/* Header&search&cart */

// product__container 
const view01 = document.querySelector('.view-mode01');
const view02 = document.querySelector('.view-mode02');
const products = document.querySelectorAll('.product');

view01.addEventListener('click',function(){
  view01.style.display = 'none';
  view02.style.display = 'flex';
  products.forEach(function(product){
    product.style.width = '225px'
  })
})
view02.addEventListener('click',function(){
  view01.style.display = 'flex';
  view02.style.display = 'none';
  products.forEach(function(product){
    product.style.width = '338px'
  })
})


const hearts = document.querySelectorAll('.favorite_border-icon');
const colorhearts = document.querySelectorAll('.favorite-icon');
const countheartBtn = document.querySelector('.count-heart');
let heartCount = 0;

countheartBtn.textContent 

hearts.forEach(function(heart, index){
  heart.addEventListener('click',function(){
    hearts[index].style.display = 'none'
    colorhearts[index].style.display = 'block'
    heartCount++;
    countheartBtn.innerText= heartCount; 
  })
})
colorhearts.forEach(function(colorheart, index){
  colorheart.addEventListener('click',function(){
    colorhearts[index].style.display = 'none'
    hearts[index].style.display = 'block'
    heartCount--;
    countheartBtn.innerText= heartCount; 
  })
})


const color01s = document.querySelectorAll('.color-01');
const color02s = document.querySelectorAll('.color-02');
const color03s = document.querySelectorAll('.color-03');
const color04s = document.querySelectorAll('.color-04');
const color05s = document.querySelectorAll('.color-05');
const productImgs = document.querySelectorAll('.product img')


color01s.forEach(function(color01, index){
  color01.addEventListener('mouseover',function(){
    productImgs[index].src = productImgs[index].src.replace('_01.jpg','_01.jpg')
  })
  color01.addEventListener('mouseout',function(){
    productImgs[index].src = productImgs[index].src.replace('_01.jpg','_01.jpg')
  })
})
color02s.forEach(function(color02, index){
  color02.addEventListener('mouseover',function(){
    productImgs[index].src = productImgs[index].src.replace('_01.jpg','_02.jpg')
  })
  color02.addEventListener('mouseout',function(){
    productImgs[index].src = productImgs[index].src.replace('_02.jpg','_01.jpg')
  })
})
color03s.forEach(function(color03, index){
  color03.addEventListener('mouseover',function(){
    productImgs[index].src = productImgs[index].src.replace('_01.jpg','_03.jpg')
  })
  color03.addEventListener('mouseout',function(){
    productImgs[index].src = productImgs[index].src.replace('_03.jpg','_01.jpg')
  })
})
color04s.forEach(function(color04, index){
  color04.addEventListener('mouseover',function(){
    productImgs[index].src = productImgs[index].src.replace('_01.jpg','_04.jpg')
  })
  color04.addEventListener('mouseout',function(){
    productImgs[index].src = productImgs[index].src.replace('_04.jpg','_01.jpg')
  })
})
color05s.forEach(function(color05, index){
  color05.addEventListener('mouseover',function(){
    productImgs[index].src = productImgs[index].src.replace('_01.jpg','_04.jpg')
  })
  color05.addEventListener('mouseout',function(){
    productImgs[index].src = productImgs[index].src.replace('_04.jpg','_01.jpg')
  })
})

