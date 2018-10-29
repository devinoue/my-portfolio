module.exports =function fadeOut(){
  // TweenMax.staggerTo('.tor', 0.25, {rotationX: 360}, 0.02);


  TweenMax.to(".myBtn", 1.0, {
        opacity: 0,
    y: -100,
  });
  TweenMax.to(".bigText", 1.4, {
          y: -500,
          opacity: 0,
          ease: Power2.easeInOut,
          delay: 1.7
     });
     TweenMax.to(".bigText2", 1.4, {
      y: 500,
      opacity: 0,
      ease: Power2.easeInOut,
      delay: 1.7
 });
      TweenMax.to(".overlay", 2, {
          delay: 2.3,
          top: "-110%",
          ease: Power2.easeInOut
     });
      TweenMax.to(".overlay2", 1.0, {
          delay: 3,
          top: "-110%",
          ease: Power2.easeInOut
     });
        TweenMax.to(".overlay3",0.7, {
          delay: 3.4,
          top: "-110%", 
          ease: Power2.easeInOut
     });
          TweenMax.to(".overlay4",0.5, {
          delay: 3.6,
          top: "-110%", 
          ease: Power2.easeInOut
     });
            TweenMax.to(".mainLogo",1, {
          delay: 3.4,
          opacity: 1,
          y:-20,
          ease: Power2.easeInOut
     });
     TweenMax.to("#cards",1, {
      delay: 3.4,
      display:'block',
      opacity: 1,
      ease: Power2.easeInOut
    });




     
}
