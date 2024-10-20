const images = [
    'ba1.jpg',
    'ba2.jpg',
    'image3.jpg',
    // Add more image paths as needed
];

let currentIndex = 0;

const productImage = document.getElementById('product-image');
const leftDoor = document.querySelector('.left-door');
const rightDoor = document.querySelector('.right-door');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function updateImage() {
    // Show closing animation
    leftDoor.classList.add('close');
    rightDoor.classList.add('right-close');
    
    // Wait for the animation to finish
    setTimeout(() => {
        // Change the image
        currentIndex = (currentIndex + 1) % images.length;
        productImage.src = images[currentIndex];
        
        // Reset doors
        leftDoor.classList.remove('close');
        rightDoor.classList.remove('right-close');

        // Show opening animation
        leftDoor.classList.add('open');
        rightDoor.classList.add('open');

        // Fade in the image
        productImage.style.opacity = '1';

        // Change colors dynamically
        changeColors();
        
        // Reset opacity after transition
        setTimeout(() => {
            productImage.style.opacity = '0';
        }, 500);
        
    }, 800); // Wait for the closing animation duration
}

function changeColors() {
    const randomColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
    leftDoor.style.fill = randomColor;
    rightDoor.style.fill = randomColor;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener('click', () => {
    updateImage();
});

// Initial image setup
productImage.src = images[currentIndex];
setTimeout(() => {
    productImage.style.opacity = '1';
}, 100);