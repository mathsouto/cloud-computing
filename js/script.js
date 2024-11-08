//Header sticky
window.addEventListener("scroll",() => {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 30)
})

//Menu mobile
const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    const body = document.body;
    nav.classList.toggle('active'); //Adiciona caso não tenha, remova caso tenha
    body.classList.toggle('no-scroll'); //Alterna o menu e bloqueia/desbloqueia o scroll
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

//Accordion click
const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    })
})

//Scroll reveal
ScrollReveal().reveal('.titleOne, .subtitleOne, .imgTwo, .textsTwo, .leftBox, .rightBox, .accordion-container', {
    duration: 2000,
    distance: '12.6%'
});
ScrollReveal().reveal('.titleOne, .imgTwo, .leftBox', {
    origin: 'left'
});
ScrollReveal().reveal('.subtitleOne, .textsTwo, .rightBox, ', {
    origin: 'right'
});
ScrollReveal().reveal('.accordion-container', {
    origin: 'top'
});