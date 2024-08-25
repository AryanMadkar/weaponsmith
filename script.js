Shery.mouseFollower();

const tl = gsap.timeline();
const tl2 = gsap.timeline();
tl.from("#nav", {
  duration: 2,
  y: -30,
  ease: "elastic.out",
  stagger: {
    each: 0.1,
    from: "top",
  },
});

tl.from("#logo,#links a", {
  duration: 2,
  y: -30,
  opacity: 0,
  ease: "elastic.out",
  stagger: {
    each: 0.1,
    from: "right",
  },
});

tl2.from("#axe", {
  duration: 1.2,
  delay:2,
  y: 200,
  opacity: 0,
  ease: "elastic.out",
  stagger: {
    each: 0.1,
    from: "left",
  },
});

Shery.makeMagnet("#axe img,#ham img" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

tl2.from("#ham", {
  duration: 1.2,
  y: 200,
  opacity: 0,
  ease: "elastic.out",
  stagger: {
    each: 0.1,
    from: "left",
  },
});

tl2.from("#piv", {
    duration: 1.2,
    x: 200,
    opacity: 0,
    ease: "elastic.out",
    stagger: {
      each: 0.1,
      from: "left",
    },
  });

Shery.makeMagnet("#nav a , #logo,#piv" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


Shery.textAnimate("#mainheading" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  });

