/*=============== CHANGE BACKGROUND HEADER ===============*/
let fecha = document.querySelector('.footer__year');
fecha.textContent =  new Date().getFullYear();
const darkmode = document.querySelector('.change-theme');

darkmode.addEventListener('click', activarDarkmode);


/*=============== SERVICES MODAL ===============*/


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.projects__grid', {
    selectors: {
        target: '.project'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkActive = document.querySelectorAll('.nav__button');
function activeLink(){
    linkActive.forEach(link=>link.classList.remove('nav__button-active'))
    this.classList.add('nav__button-active');
}
linkActive.forEach(link => link.addEventListener('click', activeLink));

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 
function activarDarkmode(){
    console.log('Activando darkmode');
    const body = document.querySelector('body');
    const claseAsignada = document.querySelectorAll('.light-theme');
    const itemsNav = document.querySelectorAll('.header__nav a');
    const navButtons = document.querySelectorAll('.nav__button');
    const proyectos = document.querySelectorAll('.project');
    const skills = document.querySelectorAll('.skill');
    const socialItems = document.querySelectorAll('i.navegacion__item');
    const projectHeadings = document.querySelectorAll('.project__heading');
    const habilidades = document.querySelectorAll('p.habilidad__name');
    if(claseAsignada.length === 0){
        body.classList.add('light-theme');
        darkmode.classList.add('fa-light', 'fa-sun-bright');
        darkmode.classList.add('negro', 'change-theme');
        document.querySelector('a').classList.add('negro');
        document.querySelector('.change-theme').classList.add('negro');
        document.querySelector('h1').classList.add('color-principal');
        document.querySelector('h2').classList.add('negro');
        document.querySelector('h3').classList.add('negro');
        document.querySelector('h4').classList.add('negro');
        document.querySelector('.header__span').classList.add('negro');
        itemsNav.forEach(elemento => elemento.classList.add('negro'));
        socialItems.forEach(elemento => elemento.classList.add('negro'));
        navButtons.forEach(elemento => elemento.classList.add('negro'));
        projectHeadings.forEach(elemento => elemento.classList.add('negro'));
        habilidades.forEach(elemento => elemento.classList.add('negro'));
        socialItems.forEach(elemento =>{ 
            elemento.classList.add('negro');
            elemento.classList.remove('navegacion__item-color');
        });
        proyectos.forEach(elemento => elemento.classList.add('bacco', 'sombra'));
        skills.forEach(elemento => elemento.classList.add('bacco', 'sombra'));
        document.querySelector('.header__nav a').classList.add('negro');
        document.querySelector('.skills__heading').classList.add('negro');
        document.querySelector('.about__heading').classList.add('negro');
        document.querySelector('.footer__year').classList.add('negro');
        document.querySelector('.scroll__info').classList.add('negro');
    }else{
        body.classList.remove('light-theme');
        darkmode.classList.remove('negro');
        document.querySelector('a').classList.remove('negro');
        document.querySelector('a').classList.remove('color-principal');
        document.querySelector('h1').classList.remove('color-principal');
        document.querySelector('h2').classList.remove('negro');
        document.querySelector('h3').classList.remove('negro');
        document.querySelector('h4').classList.remove('negro');
        itemsNav.forEach(elemento => elemento.classList.remove('negro'));
        socialItems.forEach(elemento => elemento.classList.remove('negro'));
        projectHeadings.forEach(elemento => elemento.classList.remove('negro'));
        socialItems.forEach(elemento =>{ 
            elemento.classList.remove('negro');
            elemento.classList.add('navegacion__item-color');
        });
        document.querySelector('.skills__heading').classList.remove('negro');
        proyectos.forEach(elemento => elemento.classList.remove('bacco', 'sombra'));
        skills.forEach(elemento => elemento.classList.remove('bacco', 'sombra'));
        document.querySelector('.header__span').classList.remove('negro');
        document.querySelector('.about__heading').classList.remove('negro');
        document.querySelector('.footer__year').classList.add('negro');
        document.querySelector('.scroll__info').classList.remove('negro');
        habilidades.forEach(elemento => elemento.classList.remove('negro'));
    }
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 1500,
    delay: 400,
    // reset: true,
});
sr.reveal('.header__info');
sr.reveal('.imagen', {delay: 500});
sr.reveal('.scroll', {delay: 900, origin: 'bottom'});
sr.reveal('.navegacion', {delay: 900, origin: 'bottom'});
