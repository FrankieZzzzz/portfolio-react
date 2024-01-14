import gsap from 'gsap';

const timeLine = gsap.timeline();

export const PreLoaderAnimation = () => {
  timeLine
    
    .to(".app__preloader-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
    .from(".app__preloader-container span", {
      duration: 1.5,
      delay: 0.5,
      y: 60,
      skewY: 10,
      stagger: 0.4,
      ease: "Power3.easeOut",
    })
    .to(".app__preloader-container span", {
      duration: 1,
      y: 70,
      skewY: -20,
      stagger: 0.2,
      ease: "Power3.easeOut",
    })

    .to(".app__header", {
      duration: 0.05,
      css: { overflowY: "hidden", height: "unset" },
    })
    .to("body", {
      duration: 0.1,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
    .from(".landing__top .sub", {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    })
   
    .to(".app__preloader", {
      duration: 0,
      css: { display: "none" },
    });
};