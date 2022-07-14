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