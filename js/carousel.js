function setupCarousel(carouselId, images) {
    console.log(`Setting up carousel with ID: ${carouselId}`);
    const carouselElement = document.getElementById(carouselId);

    if (!carouselElement) {
        console.error(`Carousel element with ID ${carouselId} not found.`);
        return;
    }

    const imageElement = carouselElement.querySelector('.listing-detail-image'); // Select the img element
    let currentImageIndex = 0;

    function showImage(index) {
        console.log(`Displaying image at index: ${index}`);
        imageElement.src = images[index]; // Update the src attribute of the img element
    }

    document.querySelector(`#${carouselId} .carousel-next`).addEventListener("click", function () {
        console.log("Next button clicked");
        currentImageIndex = (currentImageIndex + 1) % images.length;
        console.log(`Current image index: ${currentImageIndex}`);
        showImage(currentImageIndex);
    });

    document.querySelector(`#${carouselId} .carousel-prev`).addEventListener("click", function () {
        console.log("Previous button clicked");
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        console.log(`Current image index: ${currentImageIndex}`);
        showImage(currentImageIndex);
    });
}

// Initialize carousels
setupCarousel("carousel1", ["../image listings/steinwayap3/img1.png", "../image listings/steinwayap3/img2.png", "../image listings/steinwayap3/img3.png", "../image listings/steinwayap3/img4.png",]);
// Add more carousels as needed