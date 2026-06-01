/* =========================
   ALL SECTION ANIMATION
========================= */

window.addEventListener("scroll", ()=>{

  const triggerBottom =
  window.innerHeight * 0.85;

  /* =========================
     ABOUT SECTION
  ========================= */

  const aboutTop =
  document.querySelector(".about-top");

  const aboutCards =
  document.querySelectorAll(".about-card");

  if(
    aboutTop &&
    aboutTop.getBoundingClientRect().top < triggerBottom
  ){

    aboutTop.classList.add("show");

  }

  aboutCards.forEach((card)=>{

    if(
      card.getBoundingClientRect().top< triggerBottom
    ){

      card.classList.add("show");

    }

  });

  /* =========================
     BUSINESS SECTION
  ========================= */

  const businessImage =
  document.querySelector(".business-image");

  const businessContent =
  document.querySelector(".business-content");

  const featureBox =
  document.querySelector(".feature-box");

  const businessButtons =
  document.querySelector(".business-buttons");

  if(
    businessImage &&
    businessImage.getBoundingClientRect().top< triggerBottom
  ){

    businessImage.classList.add("show");

  }

  if(
    businessContent &&
    businessContent.getBoundingClientRect().top< triggerBottom
  ){

    businessContent.classList.add("show");

  }

  if(
    featureBox &&
    featureBox.getBoundingClientRect().top< triggerBottom
  ){

    featureBox.classList.add("show");

  }

  if(
    businessButtons &&
    businessButtons.getBoundingClientRect().top< triggerBottom
  ){

    businessButtons.classList.add("show");

  }

  /* =========================
     TRUSTED SECTION
  ========================= */

  const trustedTitle =
  document.querySelector(".trusted-container h2");

  const brandItems =
  document.querySelectorAll(".brand-item");

  if(
    trustedTitle &&
    trustedTitle.getBoundingClientRect().top< triggerBottom
  ){

    trustedTitle.classList.add("show");

  }

  brandItems.forEach((item)=>{

    if(
      item.getBoundingClientRect().top< triggerBottom
    ){

      item.classList.add("show");

    }

  });

  /* =========================
     STATS SECTION
  ========================= */

  const statsContent =
  document.querySelector(".stats-content");

  const statsBtn =
  document.querySelector(".stats-btn");

  const statsBox =
  document.querySelector(".stats-box");

  const statsItems =
  document.querySelectorAll(".stats-item");

  if(
    statsContent &&
    statsContent.getBoundingClientRect().top< triggerBottom
  ){

    statsContent.classList.add("show");

  }

  if(
    statsBtn &&
    statsBtn.getBoundingClientRect().top< triggerBottom
  ){

    statsBtn.classList.add("show");

  }

  if(
    statsBox &&
    statsBox.getBoundingClientRect().top < triggerBottom
  ){

    statsBox.classList.add("show");

  }

  statsItems.forEach((item)=>{

    if(
      item.getBoundingClientRect().top< triggerBottom
    ){

      item.classList.add("show");

    }

  });

});

/* =========================
   NEWS SECTION ANIMATION
========================= */

const newsTop =
document.querySelector(".news-top");

const newsBtn =
document.querySelector(".news-btn");

const newsCards =
document.querySelectorAll(".news-card");

window.addEventListener("scroll", ()=>{

  const newsTitle =
document.querySelector(".news-title");

  const triggerBottom =
  window.innerHeight * 0.85;

  /* TOP */

  if(
  newsTitle &&
  newsTitle.getBoundingClientRect().top< triggerBottom
){

  newsTitle.classList.add("show");

}

  if(
    newsTop &&
    newsTop.getBoundingClientRect().top< triggerBottom
  ){

    newsTop.classList.add("show");

  }

  /* BUTTON */

  if(
    newsBtn &&
    newsBtn.getBoundingClientRect().top< triggerBottom
  ){

    newsBtn.classList.add("show");

  }

  /* CARDS */

  newsCards.forEach((card)=>{

    if(
      card.getBoundingClientRect().top< triggerBottom
    ){

      card.classList.add("show");

    }

  });

});


/* =========================
   PRICING SECTION ANIMATION
========================= */

const pricingTop =
document.querySelector(".pricing-top");

const pricingCards =
document.querySelectorAll(".pricing-card");

window.addEventListener("scroll", ()=>{

  const triggerBottom =
  window.innerHeight * 0.85;

  /* TOP */

  if(
    pricingTop &&
    pricingTop.getBoundingClientRect().top< triggerBottom
  ){

    pricingTop.classList.add("show");

  }

  /* CARDS */

  pricingCards.forEach((card)=>{

    if(
      card.getBoundingClientRect().top< triggerBottom
    ){

      card.classList.add("show");

    }

  });

});


/* =========================
   FOOTER ANIMATION
========================= */

const footerLine =
document.querySelector(".footer-line");

const footerLogo =
document.querySelector(".footer-logo");

const footerColumns =
document.querySelectorAll(".footer-column");

const footerSubscribe =
document.querySelector(".footer-subscribe");

const footerSocial =
document.querySelector(".footer-social");

const footerBottom =
document.querySelector(".footer-bottom");

window.addEventListener("scroll", ()=>{

  const triggerBottom =
  window.innerHeight * 0.90;

  /* LINE */

  if(
    footerLine &&
    footerLine.getBoundingClientRect().top< triggerBottom
  ){

    footerLine.classList.add("show");

  }

  /* LOGO */

  if(
    footerLogo &&
    footerLogo.getBoundingClientRect().top< triggerBottom
  ){

    footerLogo.classList.add("show");

  }

  /* COLUMNS */

  footerColumns.forEach((column)=>{

    if(
      column.getBoundingClientRect().top< triggerBottom
    ){

      column.classList.add("show");

    }

  });

  /* SUBSCRIBE */

  if(
    footerSubscribe &&
    footerSubscribe.getBoundingClientRect().top< triggerBottom
  ){

    footerSubscribe.classList.add("show");

  }

  /* SOCIAL */

  if(
    footerSocial &&
    footerSocial.getBoundingClientRect().top< triggerBottom
  ){

    footerSocial.classList.add("show");

  }

  /* BOTTOM */

  if(
    footerBottom &&
    footerBottom.getBoundingClientRect().top
< triggerBottom){

    footerBottom.classList.add("show");

  }

});
/* =========================CUSTOM CURSOR========================= */

const dot = document.querySelector(".cursor-dot");

const ring = document.querySelector(".cursor-ring");

/* MOUSE POSITION */

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

/* MOVE DOT */

document.addEventListener("mousemove", (e) => {

  mouseX = e.clientX;
  mouseY = e.clientY;

  /* DOT FAST */

  dot.style.left = mouseX + "px";
  dot.style.top = mouseY + "px";
});

/* RING DELAY */

function animateRing() {

  ringX += (mouseX - ringX) * 0.15;

  ringY += (mouseY - ringY) * 0.15;

  ring.style.left = ringX + "px";

  ring.style.top = ringY + "px";

  requestAnimationFrame(animateRing);
}

animateRing();

/* =========================HOVER EFFEC========================= */

const hoverItems = document.querySelectorAll(
  "a, button, .card, .box"
);

hoverItems.forEach((item) => {

  item.addEventListener("mouseenter", () => {

    ring.classList.add("active");
  });

  item.addEventListener("mouseleave", () => {

    ring.classList.remove("active");
  });
});


// NAVBAR
const navbar =
  document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.classList.add("active");

  } else {

    navbar.classList.remove("active");
  }

});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {

    menuToggle.innerHTML =
      '<i class="fa-solid fa-xmark"></i>';

  } else {

    menuToggle.innerHTML =
      '<i class="fa-solid fa-bars"></i>';
  }
});

const loginBtn = document.querySelector(".login-btn");

function checkMobileMenu() {

  if (window.innerWidth <= 1100) {

    navLinks.appendChild(loginBtn);

  } else {

    document.querySelector(".navbar").insertBefore(
      loginBtn,
      menuToggle
    );
  }
}

checkMobileMenu();

window.addEventListener("resize", checkMobileMenu);

/* =========================HERO SLIDER========================= */

const hero = document.querySelector(".hero");

const heroTitle = document.getElementById("heroTitle");

const heroText = document.getElementById("heroText");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");

const slides = [

  {
    image: "./src/hero1.webp",

    title: "Empowering Businesses With Innovative Digital Solutions.",

    text: "We help startups and enterprises improve productivity and accelerate business growth."
  },

  {
    image: "./src/hero3.webp",

    title: "Transform Your Company With Smart Business Strategies.",

    text: "Our expert team delivers modern marketing, automation, and technology solutions."
  },

  {
    image: "./src/hero2.webp",

    title: "Grow Faster With Powerful Digital and tech Services.",

    text: "From startups to enterprises, we create scalable solutions for every business."
  }

];

let index = 0;

/* UPDATE SLIDE */

function updateSlide() {

  hero.style.backgroundImage =
    ` linear-gradient(
  rgba(2, 6, 23, 0.856),
  rgba(2,6,23,0.75)
  ),url('${slides[index].image}')`;

  heroTitle.style.opacity = 0;

  heroText.style.opacity = 0;

  setTimeout(() => {

    heroTitle.innerText = slides[index].title;

    heroText.innerText = slides[index].text;

    heroTitle.style.opacity = 1;

    heroText.style.opacity = 1;

  }, 300);
}

/* AUTO SLIDE */

let autoSlide = setInterval(() => {

  index++;

  if (index >= slides.length) {

    index = 0;
  }

  updateSlide();

}, 3000);

/* NEXT BUTTON */

nextBtn.addEventListener("click", () => {

  clearInterval(autoSlide);

  index++;

  if (index >= slides.length) {

    index = 0;
  }

  updateSlide();

});

/* PREV BUTTON */

prevBtn.addEventListener("click", () => {

  clearInterval(autoSlide);

  index--;

  if (index < 0) {

    index = slides.length - 1;
  }

  updateSlide();

});


/* =========================
   COUNTER ANIMATION FIX
========================= */

const counters = document.querySelectorAll(".stats-item h3");

/* RESET TO 0 */

counters.forEach(counter => {

  counter.setAttribute("data-target", counter.innerText);

  if (counter.innerText.includes("%")) {

    counter.innerText = "0%";

  } else if (counter.innerText.includes("B")) {

    counter.innerText = "0B+";

  } else {

    counter.innerText = "0K+";
  }

});

/* START COUNTER */

function startCounter() {

  counters.forEach(counter => {

    const targetText =
      counter.getAttribute("data-target");

    const target =
      parseInt(targetText.replace(/\D/g, ""));

    let count = 0;

    const updateCounter = () => {

      const increment =
        Math.ceil(target / 100);

      count += increment;

      if (count >= target) {

        counter.innerText = targetText;

      } else {

        /* SYMBOL CHECK */

        if (targetText.includes("%")) {

          counter.innerText = count + "%";

        } else if (targetText.includes("B")) {

          counter.innerText = count + "B+";

        } else {

          counter.innerText = count + "K+";
        }

        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();

  });

}

/* SCROLL START */

const statsBox =
  document.querySelector(".stats-box");

const observer =
  new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        startCounter();

        observer.unobserve(statsBox);
      }

    });

  }, { threshold: 0.4 });

observer.observe(statsBox);


/* UPDATE SLIDE */


// function changeHeroContent(){

//   /* ONLY BG IMAGE CHANGE */

//   hero.style.backgroundImage =
//   `linear-gradient(rgba(0,0,0,0.8),rgb(0,0,0)),
//    url('${slides[index].image}')`;

//   /* REMOVE OLD ANIMATION */

//   heroTitle.classList.remove("animate-text");
//   heroText.classList.remove("animate-text");

//   /* RESTART ANIMATION */

//   void heroTitle.offsetWidth;
//   void heroText.offsetWidth;

//   /* CHANGE TEXT */

//   heroTitle.innerText = slides[index].title;

//   heroText.innerText = slides[index].text;

//   /* ADD ANIMATION ONLY TO TEXT */

//   heroTitle.classList.add("animate-text");
//   heroText.classList.add("animate-text");
// }

// changeHeroContent();



// 404page



const logBtn = document.querySelector(".nav-btn");

logBtn.addEventListener("click", () => {

  window.location.href = "404.html";

});

const hobtn = document.querySelector(".btn-outline");

hobtn.addEventListener("click", () => {

  window.location.href = "404.html";

});

const hobtn2 = document.querySelector(".btn-primary");

hobtn2.addEventListener("click", () => {

  window.location.href = "404.html";

});

const hobtn3 = document.querySelector(".homta");

hobtn3.addEventListener("click", () => {

  window.location.href = "404.html";

});



const errBtns =
  document.querySelectorAll(".errbtn");

errBtns.forEach((btn) => {

  btn.addEventListener("click", () => {

    window.location.href = "./404.html";

  });

});


const hrBtns =
  document.querySelectorAll(".hbtn");

hrBtns.forEach((btn) => {

  btn.addEventListener("click", () => {

    window.location.href = "./index.html";

  });

});


/* SUBSCRIBE BUTTON */

const subscribeBtn =
  document.getElementById("subscribeBtn");

const emailInput =
  document.getElementById("emailInput");

subscribeBtn.addEventListener("click", () => {

  const email =
    emailInput.value.trim();

  /* EMAIL CHECK */

  const emailPattern =
    /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email === "") {

    alert("Please enter your email");

  } else if (!email.match(emailPattern)) {

    alert("Please enter valid email");

  } else {

    /* GO TO 404 PAGE */

    window.location.href =
      "./404.html";

  }

});


/* =========================
   HIDE LOADER
========================= */

window.addEventListener("load", () => {

  const loader =
    document.querySelector(".loader");

  setTimeout(() => {

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

  }, 2000);

});


