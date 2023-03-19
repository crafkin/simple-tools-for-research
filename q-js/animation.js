// Load the images in sequence.
// 1. The image should be the URL to the image added to the Qualtrics library.
// 2. You need to update the QID number from QIDXXX to your QID number.


const imageSources = ["image-1.png", "image-2.png", "image-3.png"] 

    // Get a reference to the text question
    const questionDiv = document.getElementById('QIDXXX');

    // Create a container for the slideshow
    const sliderContainer = document.createElement('div');
    sliderContainer.id = 'slider-container';
    questionDiv.appendChild(sliderContainer);

    // Create an image tag to hold the slideshow
    const img = document.createElement('img');
    img.id = 'my-slider';
    img.src = imageSources[0];
    sliderContainer.appendChild(img);

    // Preload the images
    const images = [];
    let loadedCount = 0;
    imageSources.forEach(src => {
        const image = new Image();
        image.onload = () => {
            // Only start the slideshow once all images have loaded
            if (++loadedCount == imageSources.length) {
                startSlider();
            }
        };
        image.src = src;
        images.push(image);
    });

    // Delay between images in milliseconds
    const delay = 3000;
    let index = 1;
    let paused = false; // new variable for pause/resume functionality
	let clickCount = 0;

    // Start the slideshow
    function startSlider() {
        setInterval(() => {
            if (!paused) { // check if slideshow is paused
				// Set the source of the current image tag to the next image in the sequence
				img.src = images[index % images.length].src;
				index++;
			}
        }, delay);
    }

// Step 1: Create a separate click event listener that toggles the pause flag
img.addEventListener('click', function() {
  clickCount++;
  if (clickCount === 1) {
    // First click behavior: pause the slideshow
    paused = true;
  } else if (clickCount === 2) {
    // Second click behavior: increment the index and resume the slideshow
    index = (index ) % images.length;
	img.src = images[index].src;
    paused = false;
    clickCount = 0; // reset click count
  }
});

