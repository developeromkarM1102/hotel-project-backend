
gsap.from("header", {
  y: -80,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  delay: 0.2
});

gsap.from(".hero h2", {
  opacity: 0,
  y: 40,
  duration: 1.2,
  delay: 0.3,
  ease: "power3.out"
});

gsap.from(".hero img", {
  opacity: 0,
  scale: 0.3,
  duration: 1.3,
  delay: 0.6,
  ease: "back.out(1.7)"
});

gsap.from(".hero p", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.9,
  ease: "power2.out"
});

gsap.fromTo(".hero .btn",
  {
    opacity: 0,
    y: 20
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1,
    stagger: 0.2,
    ease: "power2.inOut"
  }
);

gsap.from(".about h2, .about p, .about-points .point, .about h3", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
  },
  opacity: 0,
  y: 40,
  duration: 0.9,
  stagger: 0.3,
  ease: "power3.out"
});

gsap.from("#contact h4", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 85%",
  },
  opacity: 0,
  y: 40,
  duration: 0.8
});

gsap.from("#contactlogo", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top 70%",
  },
  opacity: 0,
  scale: 0.5,
  duration: 0.8,
  stagger: 0.2,
  ease: "back.out(1.6)"
});

gsap.from(".footer", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 90%",
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: "power2.out"
});


gsap.fromTo(".about .btn",
  {
    opacity: 0,
    y: 20
  },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1,
    stagger: 0.2,
    ease: "power2.inOut"
  }
);

gsap.to(".slider .about-image img", {
  x: -500,
  duration: 3,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true
});

gsap.from(".menu-btn", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out"
});

gsap.from(".reservation-container", {
    opacity: 0,
    y: 60,
    duration: 1.3,
    delay: 0.5,
    ease: "power3.out"
});

gsap.from(".reservation-container form > *", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.15,
    delay: 0.8,
    ease: "power2.out"
});


gsap.to(".reservation-container #AC, .reservation-container #non-AC", {
  opacity: 2,
  duration: 1,
  stagger: 0.5,
  delay: 1.5,
});

gsap.to(".reservation-container #Submitreservation, .reservation-container #cancelreservation", {
  opacity: 2,
  duration: 1,  
  stagger: 0.5,
  delay: 1.5,
});

gsap.to(".login-form-container .section-title", {
  opacity: 1,
  duration: 1,
  delay: 0.5, 
});

gsap.from(".login-form-container", {
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".section-title", {
  opacity: 0,
  y: 20,
  duration: 0.8,
  delay: 0.2
});

gsap.from(".input-group", {
  opacity: 0,
  y: 15,
  duration: 0.7,
  stagger: 0.15,
  delay: 0.3
});

gsap.from("#login-form .btn", {
  opacity: 2,
  y: 2,
  duration: 0.7,
  delay: 0.6
});

gsap.from(".toggle-link, .toggle-link-admin-btn", {
  opacity: 0,
  duration: 0.7,
  stagger: 0.1,
  delay: 0.8
});

gsap.to(".categories button",{
  opacity:1,
  duration:1,
  delay:0.5,
  ease:"power2.out"
})

