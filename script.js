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
        // Verify first image loads
        imgElement.onload = function() {
            console.log('First image loaded successfully');
        };
        imgElement.onerror = function() {
            console.error('First image failed to load:', imgElement.src);
        };
        setInterval(changeImage, 6000);
    }
});
