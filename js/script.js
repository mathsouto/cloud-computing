//Header sticky
window.addEventListener("scroll",() => {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 30)
})

//Accordion click
document.addEventListener('click', function(event) {
    const accordion = event.target.closest('.accordion');
    if (accordion) {
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    }
});

//Scroll reveal
ScrollReveal().reveal('.titleOne, .subtitleOne, .imgTwo, .textsTwo, .leftBox, .rightBox', {
    duration: 2000,
    distance: '12.6%'
});

ScrollReveal().reveal('.titleOne, .imgTwo, .leftBox', {
    origin: 'left'
});

ScrollReveal().reveal('.subtitleOne, .textsTwo, .rightBox', {
    origin: 'right'
});
