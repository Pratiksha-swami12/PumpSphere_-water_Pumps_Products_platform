let swiper = new Swiper(".home", {
      spaceBetween: 30,
      centeredSlides: true,
      loop:true,
      // autoplay:{
      //   delay:2000,
      //   disableOnInteraction: false,
      // },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
// ***********SEARCH types************************************************


document.addEventListener("DOMContentLoaded", function() {
  const searchBox = document.getElementById("searchBox");
  const loader = document.getElementById("loader");
 const notFound = document.getElementById("notFound");



  searchBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
       e.preventDefault();
      let query = searchBox.value.trim().toLowerCase();
// if empty search 
   if (!query) {
     
        notFound.style.display = "block";
        setTimeout(() => { 
          
          notFound.style.display = "none"; 
        }, 2000);
        return;
      }


   // Show loader
      loader.style.display = "block";

      setTimeout(()=>{
      if (query.includes("agriculture") || query.includes("agricultural")) {
        window.location.href = "AgriculturalProducts.html";
      } 
      else if (query.includes("domestic")) {
        window.location.href = "Domestic.html";
      } 
      else if (query.includes("wires") || query.includes("cables") || query.includes("pipes")) {
        window.location.href = "Wires&Cables.html";
      } 
      else {
        // Hide loader
          loader.style.display = "none";
          
          // Show not found popup
          notFound.style.display = "block";
          // Hide popup after 2 sec
          setTimeout(() => {
          
            notFound.style.display = "none";
          }, 2000);
      }
      }, 1500);
    }
  });
});

// **************************************************************************************************************************
  // testimonial slider
const track = document.querySelector('.testi_track');
  const cards = document.querySelectorAll('.testi_card');
  let visibleCards = getVisibleCards(); // based on screen size
  let index = 0;

  // Clone first visibleCards to the end for infinite loop
  for (let i = 0; i < visibleCards; i++) {
    const clone = cards[i].cloneNode(true);
    track.appendChild(clone);
  }

  function getVisibleCards() {
    const width = window.innerWidth;
    if (width < 600) return 1;
    if (width < 992) return 2;
    return 3;
  }

  function updateSlide() {
    const cardWidth = track.querySelector('.testi_card').offsetWidth;
    index++;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${index * cardWidth}px)`;

    if (index === cards.length) {
      setTimeout(() => {
        track.style.transition = 'none';
        track.style.transform = 'translateX(0)';
        index = 0;
      }, 500);
    }
  }

  let interval = setInterval(updateSlide, 3000);

  // Recalculate on resize
  window.addEventListener('resize', () => {
    clearInterval(interval);
    location.reload(); // reload to recalculate visibleCards properly
  });
  // *********************************************
 
// **********************************************
// for that bottom arrow

document.addEventListener("DOMContentLoaded", () => {
    const arrow = document.querySelector('.bottom_arrow');

    if (!arrow) return; // Safeguard

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        arrow.classList.add('show');
      } else {
        arrow.classList.remove('show');
      }
    });

    arrow.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });


// *************************************************************
//  js for Best Selling products
 document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Optional: remove once it's shown
        }
      });
    }, {
      threshold: 0.2 // Trigger when 20% is visible
    });

    const target = document.querySelector('.product_category');
    if (target) observer.observe(target);
  });
// *************************videoFrame js*************************
document.addEventListener("DOMContentLoaded", () => {
  const introSection = document.querySelector(".introvideo");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        introSection.classList.add("show");
        observer.unobserve(introSection); // run only once
      }
    });
  }, { threshold: 0.4 }); // trigger when 20% is visible

  observer.observe(introSection);
});


// ****************************for active class on the navbar************************


  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-list a");

    // Update active link on scroll
    window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
         const sectionHeight = section.offsetHeight;
         if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
          link.classList.add("active");
        }
      });
    });

   window.addEventListener("scroll", activateLinkOnScroll);
    
  });
  // **************************************************************
  //  Intersection Observer  built in API 
  // for service cards

document.addEventListener("DOMContentLoaded", () => {
  const serviceCards = document.querySelectorAll(".service-card");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Delay each card based on its index for staggered animation
        setTimeout(() => {
          entry.target.classList.add("animate");
        }, index * 200);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.4
  });

  serviceCards.forEach(card => {
    observer.observe(card);
  });
});
// **************************************************************
// ABOUT US JS

document.addEventListener("DOMContentLoaded", function () {
  const allReveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const elements = entry.target.querySelectorAll(".reveal");
        let delay = 1;
        elements.forEach((el) => {
          setTimeout(() => {
            el.classList.add("show");
          }, delay);
          delay += 400; // Stagger time
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  // Observe the main About Us container
  const aboutSection = document.querySelector(".about-content");
  if (aboutSection) observer.observe(aboutSection);
});
// *************************************************************************
// CONTANCT US 
// IntersectionObserver for Scroll Animation
const contactSection = document.querySelector('.contact-container');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      contactSection.classList.add('show');
    }
  });
}, { threshold: 0.4 });

observer.observe(contactSection);

// Form Submission Message
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Your message has been submitted successfully! ✅");
  this.reset();
});
// ********************************************************************
// footer js

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".footer");
  const footerCols = document.querySelectorAll(".footer-container > div");

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Slide the whole footer up
        footer.classList.add("show");

        // Stagger columns
        footerCols.forEach((col, index) => {
          setTimeout(() => {
            col.classList.add("show-col");
          }, index * 200); // 200ms delay per column
        });

        footerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  footerObserver.observe(footer);
});

















    