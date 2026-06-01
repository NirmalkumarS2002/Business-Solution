

/* =========================CUSTOM CURSOR========================= */

const dot = document.querySelector(".cursor-dot");

const ring = document.querySelector(".cursor-ring");

/* MOUSE POSITION */

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

/* MOVE DOT */

document.addEventListener("mousemove",(e)=>{

  mouseX = e.clientX;
  mouseY = e.clientY;

  /* DOT FAST */

  dot.style.left = mouseX + "px";
  dot.style.top  = mouseY + "px";
});

/* RING DELAY */

function animateRing(){

  ringX += (mouseX - ringX) * 0.15;

  ringY += (mouseY - ringY) * 0.15;

  ring.style.left = ringX + "px";

  ring.style.top  = ringY + "px";

  requestAnimationFrame(animateRing);
}

animateRing();

/* =========================HOVER EFFEC========================= */

const hoverItems = document.querySelectorAll(
  "a, button, .card, .box"
);

hoverItems.forEach((item)=>{

  item.addEventListener("mouseenter",()=>{

    ring.classList.add("active");
  });

  item.addEventListener("mouseleave",()=>{

    ring.classList.remove("active");
  });
});

/* =========================MOBILE MENu========================= */

// const menuToggle = document.getElementById("menuToggle");

// const navLinks = document.getElementById("navLinks");

// menuToggle.addEventListener("click",()=>{

//   navLinks.classList.toggle("active");

//   if(navLinks.classList.contains("active")){

//     menuToggle.innerHTML =
//     `<i class="fa-solid fa-xmark"></i>`;

//     document.body.style.overflow = "hidden";

//   }else{

//     menuToggle.innerHTML =
//     `<i class="fa-solid fa-bars"></i>`;

//     document.body.style.overflow = "auto";
//   }

// });

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

  if(navLinks.classList.contains("active")){

    menuToggle.innerHTML =
    '<i class="fa-solid fa-xmark"></i>';

  }else{

    menuToggle.innerHTML =
    '<i class="fa-solid fa-bars"></i>';
  }
});

const loginBtn = document.querySelector(".login-btn");

function checkMobileMenu(){

  if(window.innerWidth <= 1100){

    navLinks.appendChild(loginBtn);

  }else{

    document.querySelector(".navbar").insertBefore(
      loginBtn,
      menuToggle
    );
  }
}

checkMobileMenu();

window.addEventListener("resize",checkMobileMenu);

/* =========================HERO SLIDER========================= */

const hero = document.querySelector(".hero");

const heroTitle = document.getElementById("heroTitle");

const heroText = document.getElementById("heroText");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");

const slides = [

{
  image:"./src/hero1.webp",

  title:"Empowering Businesses With Innovative Digital Solutions.",

  text:"We help startups and enterprises improve productivity and accelerate business growth."
},

{
  image:"./src/hero3.webp",

  title:"Transform Your Company With Smart Business Strategies.",

  text:"Our expert team delivers modern marketing, automation, and technology solutions."
},

{
  image:"./src/hero2.webp",

  title:"Grow Faster With Powerful Digital and tech Services.",

  text:"From startups to enterprises, we create scalable solutions for every business."
}

];

let index = 0;

/* UPDATE SLIDE */

function updateSlide(){

  hero.style.backgroundImage =
  ` linear-gradient(
  rgba(2, 6, 23, 0.856),
  rgba(2,6,23,0.75)
  ),url('${slides[index].image}')`;

  heroTitle.style.opacity = 0;

  heroText.style.opacity = 0;

  setTimeout(()=>{

    heroTitle.innerText = slides[index].title;

    heroText.innerText = slides[index].text;

    heroTitle.style.opacity = 1;

    heroText.style.opacity = 1;

  },300);
}

/* AUTO SLIDE */

let autoSlide = setInterval(()=>{

  index++;

  if(index >= slides.length){

    index = 0;
  }

  updateSlide();

},3000);

/* NEXT BUTTON */

nextBtn.addEventListener("click",()=>{

  clearInterval(autoSlide);

  index++;

  if(index >= slides.length){

    index = 0;
  }

  updateSlide();

});

/* PREV BUTTON */

prevBtn.addEventListener("click",()=>{

  clearInterval(autoSlide);

  index--;

  if(index < 0){

    index = slides.length - 1;
  }

  updateSlide();

});


// /* =========================
//    COUNTER ANIMATION FIX
// ========================= */

// const counters = document.querySelectorAll(".stats-item h3");

// /* RESET TO 0 */

// counters.forEach(counter=>{

//   counter.setAttribute("data-target",counter.innerText);

//   if(counter.innerText.includes("%")){

//     counter.innerText = "0%";

//   }else if(counter.innerText.includes("B")){

//     counter.innerText = "0B+";

//   }else{

//     counter.innerText = "0K+";
//   }

// });

// /* START COUNTER */

// function startCounter(){

//   counters.forEach(counter=>{

//     const targetText =
//     counter.getAttribute("data-target");

//     const target =
//     parseInt(targetText.replace(/\D/g,""));

//     let count = 0;

//     const updateCounter = ()=>{

//       const increment =
//       Math.ceil(target / 100);

//       count += increment;

//       if(count >= target){

//         counter.innerText = targetText;

//       }else{

//         /* SYMBOL CHECK */

//         if(targetText.includes("%")){

//           counter.innerText = count + "%";

//         }else if(targetText.includes("B")){

//           counter.innerText = count + "B+";

//         }else{

//           counter.innerText = count + "K+";
//         }

//         requestAnimationFrame(updateCounter);
//       }
//     };

//     updateCounter();

//   });

// }

// /* SCROLL START */

// const statsBox =
// document.querySelector(".stats-box");

// const observer =
// new IntersectionObserver((entries)=>{

//   entries.forEach(entry=>{

//     if(entry.isIntersecting){

//       startCounter();

//       observer.unobserve(statsBox);
//     }

//   });

// },{ threshold:0.4 });

// observer.observe(statsBox);


/* UPDATE SLIDE */


function changeHeroContent(){

  /* ONLY BG IMAGE CHANGE */

  hero.style.backgroundImage =
  `linear-gradient(rgba(0,0,0,0.8),rgb(0,0,0)),
   url('${slides[index].image}')`;

  /* REMOVE OLD ANIMATION */

  heroTitle.classList.remove("animate-text");
  heroText.classList.remove("animate-text");

  /* RESTART ANIMATION */

  void heroTitle.offsetWidth;
  void heroText.offsetWidth;

  /* CHANGE TEXT */

  heroTitle.innerText = slides[index].title;

  heroText.innerText = slides[index].text;

  /* ADD ANIMATION ONLY TO TEXT */

  heroTitle.classList.add("animate-text");
  heroText.classList.add("animate-text");
}

changeHeroContent();