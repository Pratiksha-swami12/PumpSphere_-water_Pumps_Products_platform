
    // JS FOR OPTION FEATURES CHOOSE OPTION dropdown 
    document.addEventListener('DOMContentLoaded', () => {
      const pumpSelect = document.getElementById('pumps')
      pumpSelect.addEventListener('change', function () {
        const firstOption = pumpSelect.options[0];
        if (firstOption.value === "" && pumpSelect.selectedIndex !== 0) {
          pumpSelect.remove(0);
        }
      })
    });



    //  for the agricultural product page connect with us button
    // const loginModal = document.getElementById('loginModal');
    // const closeModal = document.getElementById('closeModal');
    const connectUs = document.querySelector('.connect-btn');
    connectUs.addEventListener('click', (e) => {
      e.preventDefault();
      loginModal.style.display = 'flex';
      document.body.classList.add('modal-open');
      document.querySelector('.form-box.login').style.display = 'block';
      document.querySelector('.form-box.register').style.display = 'none';
    });
    closeModal.addEventListener('click', () => {
  loginModal.style.display = 'none';
  document.body.classList.remove('modal-open');
});


// Toggle Register/Login in Modal
document.querySelector('.register-link').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.form-box.login').style.display = 'none';
  document.querySelector('.form-box.register').style.display = 'block';
});

document.querySelector('.login-link').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.form-box.register').style.display = 'none';
  document.querySelector('.form-box.login').style.display = 'block';
});



    // JS FOR FILTERING THE CATEGORIES OF PRODUCTS 
    document.addEventListener('DOMContentLoaded', () => {
      const pumpSelect = document.getElementById("pumps");
      const productCards = document.querySelectorAll('.product-card')
      pumpSelect.addEventListener('change', () => {
        const selectedType = pumpSelect.value;
        productCards.forEach(card => {
          const type = card.getAttribute('data-type');
          if (type === selectedType) {
            card.style.display = 'block';

          } else if (selectedType == 'all') {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        })
      })
    })
    // js for why-choose
    document.addEventListener("DOMContentLoaded", () => {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Optional: remove once it's shown
          }
        });
      }, {
        threshold: 0.2 // Trigger when 20% is visible
      });

      const target = document.querySelector('.why-choose');
      if (target) observer.observe(target);
    });
//***********************************************************

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
// **********************************************************
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
  // ************************* product description popup************************************************
  // Modal open
 // Get modal elements
const modal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const closeBtn = document.querySelector(".close");

// Handle Buy Now click
document.querySelectorAll(".buy-now").forEach(button => {
  button.addEventListener("click", function () {
    const card = this.closest(".product-card"); // find the product card
    const img = card.querySelector("img").src;
    const title = card.querySelector("h3").innerText;
    const price = card.querySelector("p").innerText;

    // Fill modal content
    modalImage.src = img;
    modalTitle.textContent = title;
    modalPrice.textContent = price;

    // Show modal
    modal.style.display = "flex";
  });
});

// Close modal
// if you click on x then it will close it
closeBtn.onclick = () => modal.style.display = "none";
// if you click outside model still you will close
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

// Add to Cart example
document.getElementById("addToCart").addEventListener("click", () => {
  alert("Item added to cart!");
  modal.style.display = "none";
});



