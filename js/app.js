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

// in folowers html
const folowers = document.querySelector('.folowers');

const valuefolowers = {
    
        image:{
            img: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" style = "width = "40px"" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 004.875-4.875V12m6.375 5.25a4.875 4.875 0 01-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v13.5a1.5 1.5 0 001.5 1.5zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 013.182 3.182zM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 113.182-3.182z" />
      </svg>`,
      title:'Подписка'},

    }

 folowers.innerHTML = `<h1>${valuefolowers.image.img}</h1>`