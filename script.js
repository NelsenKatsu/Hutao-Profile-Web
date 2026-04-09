const images = [
    'Resource/Hutao-banner2.jpg',
    'Resource/Hutao-banner3.jpg',
    'Resource/Hutao-banner4.jpg',
    'Resource/Hutao-banner1ARrev.png'
];

let currentIndex = 0;
let imgElement = null;

function changeImage() {
    if (!imgElement) return;
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.style.opacity = '0';
    
    setTimeout(() => {
        if (imgElement) {
            imgElement.src = images[currentIndex];
            imgElement.style.opacity = '1';
        
            imgElement.onerror = function() {
                console.error('Failed to load image:', images[currentIndex]);
                
                currentIndex = (currentIndex + 1) % images.length;
                imgElement.src = images[currentIndex];
            };
        }
    }, 300);
}

document.addEventListener('DOMContentLoaded', function() {
    imgElement = document.getElementById('divider-img');
    console.log('Found divider-img:', imgElement);
    if (imgElement) {
        imgElement.onload = function() {
            console.log('First image loaded successfully');
        };
        imgElement.onerror = function() {
            console.error('First image failed to load:', imgElement.src);
        };
        setInterval(changeImage, 6000);
    }
    

    function checkScroll() {
    const elements = document.querySelectorAll('.fade-up');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // Element is visible when its top is above window bottom AND bottom is below window top
        const isVisible = elementTop < windowHeight - 50 && elementBottom > 50;
        
        if (isVisible) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
}
    
    // Add class to elements you want to animate
    const elementsToAnimate = [
        document.querySelector('.divider-section'),
        document.querySelector('.info-section'),
        document.querySelector('.signature-container'),
        document.querySelector('.main-quote')
    ];
    
    elementsToAnimate.forEach(el => {
        if (el) {
            el.classList.add('fade-up');
        }
    });
   
    const listItems = document.querySelectorAll('.info-list li');
    listItems.forEach((item, index) => {
        item.classList.add('fade-up');
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});
