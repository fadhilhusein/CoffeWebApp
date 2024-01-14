let hamburger = document.querySelector('header .navigation .hamburger');
let ul = document.querySelector("header .navigation ul");
let a = document.querySelectorAll(".navigation ul li a")

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    ul.classList.toggle('active');
})

a.forEach((element) => {
    element.addEventListener('click', () => {
        hamburger.classList.toggle('active')
        ul.classList.toggle('active')
    })
})

var swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// let jam;
// let menit;
// let detik;

// function berhenti() {
//     clearInterval(itungMundur)
// }

// function countDown(a,b,c) {
//     jam = a;
//     menit = b;
//     detik = c;

//     var itungMundur = setInterval(() => {
//         if (detik > 0) {
//             detik -= 1;
//         } else if (detik < 0 && menit > 0) {
//             detik = 60;
//             menit -= 1;
//             if (menit == 0 && jam > 0) {
//                 jam -= 1;
//             } else if (menit < 0 && jam > 0) {
//                 menit = 59;
//             }
//         } else if (jam == 0 && menit == 0 && detik == 0){
//             return console.log('selesai')
//         }
//         console.log(jam + ':' + menit + ':' + detik)
//     },1000);

//     if (jam == 0 && menit == 0 && detik == 0) {
//         berhenti()
//     }
// } 




