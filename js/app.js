// Burger menu
function toggleSlide(){
    document.querySelector('.slidebar').classList.toggle('active');
}
// modal
const modal = document.querySelector('.myModal');
const btn = document.querySelector('.btnModal');
const span = document.querySelector('.close');

btn.addEventListener('click', function(){
    modal.style.display = 'block';
    console.log(1)
})
span.addEventListener('click', function(){
    modal.style.display = 'none';
})

window.addEventListener('click', function(event){
    if(event.target == modal){
        modal.style.display = 'none';
    }
})

// faker mode
const modalContent = document.querySelector('.modalContent');
const userName = {
    name: faker.name.findName(),
    avatar: faker.image.abstract()
}

modalContent.innerHTML = `<h5>${userName.name}</h5>`;
// modalContent.innerHTML = ` <img src="${}" alt="">`

const rem = document.querySelector('.sliderMenu');
let navSlider = '';

for(let i = 0; i <= 40; i++){
 
    navSlider = navSlider + `  <a href ="#">${faker.lorem.word()}</a> `; 
}

rem.innerHTML = navSlider;

// slider For words
let offset = 0; //смешение от левого края
const sliderMenu = document.querySelector('.sliderMenu');
const prew = document.querySelector('.prew');
const next = document.querySelector('.next');

next.addEventListener('click', function(){
    offset += 10;
    if(offset > 100){
        offset = 0;
    }
    sliderMenu.style.left = -offset + '%';
})

prew.addEventListener('click', function(){
    offset -= 10;
    if(offset <= 0){
         offset = 100;
    }
    sliderMenu.style.left = -offset + '%';
})

