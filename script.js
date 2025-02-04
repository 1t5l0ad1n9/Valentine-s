const galleryImages = document.querySelectorAll('#gallery-container img');
//Covert nodeList to Array
const images= Array.from(galleryImages)
//Select elements for light box
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentIndex = 0;//Tracks displayed image index

galleryImages.forEach((image,index) => {
    image.addEventListener('click', () => {
        currentIndex=index;
        lightboxImg.src = image.src;
        lightbox.classList.add('visible')
    });
});

//Closes the lightbox when click outside of content

lightbox.addEventListener('click', (event) => {
    if(event.target === lightbox){
lightbox.classList.remove('visible')
    }
})
//Show next image in the lightbox
document.getElementById('next').addEventListener('click',() => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
})
//Show previous image in lightbox
document.getElementById('prev').addEventListener('click',() => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
})
//Keyboard navigation for lightbox
Document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight'){
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex].src;
    }else if (event.key === 'ArrowLeft'){
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            lightboxImg.src = images[currentIndex].src;
    }else if(event.key === 'Escape'){
        
            lightbox.classList.remove('visible')
        }
    })
    