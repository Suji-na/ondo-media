import Aos from "aos";
// import "aos/dist/aos.css";

function animateOnScroll(){
  Aos.init(
    {
      debounceDelay: 50, 
      throttleDelay: 99,
      offset: 50,
      duration: 2000, 
      easing: "ease", 
      once: false, 
      mirror: false, 
      anchorPlacement: "top-bottom", 
    
    }
  );
}

export{ animateOnScroll };