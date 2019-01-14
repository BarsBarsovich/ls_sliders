let sliderContainer = document.getElementById('sliderContainer');
let sliderStep = 0;

const  sliderWidth = (sliderContainer.children.length-1) * sliderContainer.children[0].clientWidth;
console.log('sliderWidth', sliderWidth);


// левая стрелка
document.querySelector('.slider__left-img').addEventListener('click', function () {
    console.log('left');
    if (sliderStep > 0){
        sliderStep -= 900;
        sliderContainer.style.transform = "translate(-" + sliderStep + "px)";
        console.log('neg',sliderStep);        
    }
});

document.querySelector('.slider__right-img').addEventListener('click', ()=>{
    console.log('right');
    if (sliderStep < sliderWidth){
        sliderStep += 900;
        sliderContainer.style.transform = "translate(-" + sliderStep + "px)";
        console.log('pos',sliderStep);        
    }
})
