const navMenu = document.querySelector('.c-hamburger');
const menu = document.querySelector('.menu');

navMenu.addEventListener('click', function(e){
    
    e.preventDefault();
    // this.classList.toggle('is-active');
    if(this.classList.contains('is-active')){
        this.classList.remove('is-active');
        menu.classList.remove('nav-active');
        document.body.classList.remove('body-active');
        
    }else{
        this.classList.add('is-active');
        menu.classList.add('nav-active');
        document.body.classList.add('body-active');

    }
})
