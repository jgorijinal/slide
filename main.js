let  container = document.querySelector('.container')
let sliderContainer = document.querySelector('.slider-container')
let slides = document.querySelectorAll('.slide')
let length = slides.length
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let maxHeight = 0
let currentIndex = 0
//遍历slide , 获得最大的高度
for (let i=0 ; i<length ;i++) {
    if(slides[i].getBoundingClientRect().height > maxHeight  ) {
        maxHeight = slides[i].getBoundingClientRect().height
    }
}
//把最大的宽高赋值给 container 和 slider-container , 因为是absolute , 把他撑起来
container.style.height = maxHeight + 'px'
sliderContainer.style.height = maxHeight + 'px'
//往右排列slides
for  (let i=0 ; i<length ;i++) {
    slides[i].style.left = i*100 +'%'
}
function slide (index) {
    sliderContainer.style.left = (-100* index) + '%'
}
slide(0)
next.addEventListener('click' , ()=>{
    currentIndex += 1
    if(currentIndex  === length) {
        currentIndex = 0
    }
    slide(currentIndex)
})
prev.addEventListener('click' , ()=>{
    currentIndex -= 1
    if(currentIndex  <  0) {
        currentIndex = 3
    }
    slide(currentIndex)
})