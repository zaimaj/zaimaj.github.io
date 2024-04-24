// 
// Part 1: Fill in the function unhideLightbox. Afterwards, we will make this function run when a picture is clicked on.
// 
// Function to show the lightbox when a picture is clicked

/**
 * Makes lightbox overlay visible, and shows the lightbox pop-up corresponding to the id
 
 * @param {string} lightboxID The id of the lightbox pop-up to show
 */


	// TODO: Remove the .hidden class from the div with the given id




//
// Part 2: Make the unhideLightbox function run when a picture is clicked on.
// 

/**
 * Calls unhideLightbox with the id of the first lightbox
 */
function unhideLightbox1() {
	// TODO: Look in q2.html to see what the id for the lightbox div for the first picture, and call unhideLightbox

}

// TODO: Set the browser to run the function unhideLightbox1 when someone clicks #picture-1


// TODO: do the same for #picture-2, write a function and then make it run on click





// TODO: do the same for #picture-3, write a function and then make it run on click






// 
// Part 3: Now we need to be able to close the lightbox when we click outside the picture!
// 
function closeLightbox(lightboxID) {
	// This adds the .hidden class to the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.add('hidden');

	// TODO: Add the .hidden class to the div with the given id

}


// This function class closeLightbox() for every .lightbox div - feel free to read it, but you do not have to understand it completely!
// function closeAllLightboxes() {
// 	// get every .lightbox div, getElementsByClassName gives us an array 
// 	var lightboxElements = document.getElementsByClassName('lightbox');

// 	// sneak preview of Javascript loops, which will go through every element in an array of elements

// TODO: set the closeAllLightboxes function to run when #lightbox-overlay is clicked on.
const images = document.querySelectorAll('#pictures img');
        
const lightboxes = document.querySelectorAll('.lightbox');


const lightboxOverlay = document.getElementById('lightbox-overlay');

images.forEach((image, index) => {
	// Add click event listener to each image
	image.addEventListener('click', () => {
		// Show the corresponding lightbox
		lightboxes[index].style.display = 'block';
		lightboxOverlay.style.display = 'block';
	});
});

// Add click event listener to the lightbox overlay
lightboxOverlay.addEventListener('click', () => {
	// Hide all lightboxes and the overlay
	lightboxes.forEach(lightbox => {
		lightbox.style.display = 'none';
	});
	lightboxOverlay.style.display = 'none';
});

// Prevent clicks inside lightbox from closing it
lightboxes.forEach(lightbox => {
	lightbox.addEventListener('click', (e) => {
		e.stopPropagation();
	});
});