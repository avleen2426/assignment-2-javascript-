
//  Defining the Gallery class
function Gallery(images) {
  // Initializing the gallery with the provided images
  this.images = images;
  this.currentIndex = 0;

  // Navigating to the next image in the gallery
  this.nextImage = function() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.displayImage();
  };

  // Navigating to the previous image in the gallery
  this.previousImage = function() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.displayImage();
  };

  // Display the current image in the gallery
  this.displayImage = function() {
    // Getting the  figure element
    const figureElement = document.getElementById('gallery-figure');
    // Getting thr image element
    const imgElement = figureElement.querySelector('img');
    // Getting the figcaption element
    const figcaptionElement = figureElement.querySelector('figcaption');
    // Getting the ul element
    const ulElement = document.getElementById('gallery-thumbnails');

    // Updating the main image
    this.updateMainImage(imgElement);

    // Updating the figure caption
    this.updateFigureCaption(figcaptionElement);

    // Updating the thumbnails
    this.updateThumbnails(ulElement);
  };

  // Updating the main image
  this.updateMainImage = function(imgElement) {
    imgElement.src = `images/${this.images[this.currentIndex].large}`;
  };

  // Updating the figure caption
  this.updateFigureCaption = function(figcaptionElement) {
    figcaptionElement.textContent = `Image ${this.currentIndex + 1} of ${this.images.length}`;
  };

  // Updating the thumbnails
  this.updateThumbnails = function(ulElement) {
    const thumbnails = ulElement.querySelectorAll('li');
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.querySelector('img').src = `images/${this.images[index].small}`;
      thumbnail.className = index === this.currentIndex ? 'active' : '';
    });
  };
}
//  Defining the images
const images = [
  { large: 'flowers-pink-large.jpg', small: 'flowers-pink-small.jpg' },
  { large: 'flowers-purple-large.jpg', small: 'flowers-purple-small.jpg' },
  { large: 'flowers-red-large.jpg', small: 'flowers-red-small.jpg' },
  { large: 'flowers-white-large.jpg', small: 'flowers-white-small.jpg' },
  { large: 'flowers-yellow-large.jpg', small: 'flowers-yellow-small.jpg' }
];

//  Creating a new gallery
const gallery = new Gallery(images);

document.getElementById('next-button').addEventListener('click', function() {
  gallery.nextImage();
});

document.getElementById('previous-button').addEventListener('click', function() {
  gallery.previousImage();
});

//  At the end Initializing the gallery
gallery.displayImage();