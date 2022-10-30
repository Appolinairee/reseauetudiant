titres = document.querySelectorAll('h1 span');
buttons = document.querySelectorAll('.buttons button');
nav = document.querySelectorAll('nav a');
l1 = document.querySelector('.l1');
l2 = document.querySelector('.l2');

let btNuit = document.getElementById('btNuit');
let body = document.querySelector('body');
let loading = document.querySelector('.loading');
let cartes = document.querySelectorAll('.carte');
let objectifs = document.querySelector('.objectifs');
let options = document.querySelector('.options');


window.addEventListener('load', ()=>{

    loading.style.display = 'none';
    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titres, .8, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .staggerFrom(buttons, .4, {opacity: 0, ease: "power2.out"}, 0.3)
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=1')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=1')
    .staggerFrom(nav, .8, {bottom: -200, ease: "power2.out"}, 0.3, '-=1');

   TL.play();

   // GESTION AUTOMATIQUE DU SCROLL X

   let universites = document.querySelector('.universites');
//    let categories = document.querySelector('.categories');
   
   let w = window.innerWidth;
   function scrollFunction(nom, duree, nbrElement) {
       setInterval(() => {
          nom.scrollLeft += 170;
           
           if (nom.scrollLeft > (w*nbrElement)){
               nom.scrollLeft = 0;
           }
       }, duree);
   }

   scrollFunction(universites, 5000, 4);

   //    Mode nuit
   btNuit.addEventListener('click', ()=>{
    
        body.classList.toggle('nuit');
   });

//    ANIM AU SCROLL

   window.addEventListener('scroll', ()=>{
       const {scrollTop, clientHeight} = document.documentElement;

       function scrollAppa(nom) {
           const topDis = nom.getBoundingClientRect().top;

           if (scrollTop > (scrollTop + topDis -600).toFixed()) {
              nom.classList.add('active');
           }
       }

       scrollAppa(options);
       scrollAppa(objectifs);
       for (let i = 0; i < 3; i++) {
        scrollAppa(cartes[i]);
       }
   } );
});
