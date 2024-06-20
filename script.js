document.addEventListener("DOMContentLoaded", function() {
    const checkoutButtons = document.querySelectorAll('.checkout-btn');
  
    function addToCart(event) {
      const product = event.target.getAttribute('data-product');
      // Here you can implement functionality to add the selected product to the cart
      console.log(`Added ${product} to cart`);
      // For demo purposes, just logging the product
    }
  
    checkoutButtons.forEach(button => {
      button.addEventListener('click', addToCart);
    });
  });
  

  // rotating carousel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;

let currentIndex = 0;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const startCarousel = () => {
    setInterval(() => {
        const currentSlide = track.querySelector('.current-slide') || slides[0];
        currentIndex = (currentIndex + 1) % slides.length;
        const nextSlide = slides[currentIndex];
        moveToSlide(track, currentSlide, nextSlide);
    }, 3000); // Change slide every 3 seconds
};

startCarousel();

const showButton = document.getElementById('prebookbtn');
const hiddenSection = document.getElementById('pre-booking');

showButton.addEventListener('click', () => {
  hiddenSection.style.display = 'block';  // Change display style to "block" on click
});


