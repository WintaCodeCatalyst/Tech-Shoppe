
//This is the script file for the website

function changeCarouselPic (onclick, ) {

   // document.querySelector('.carousel-control-prev')

	document.querySelector('.carousel-control-prev').addEventListener('click', changeCarouselPic);
	document.querySelector('.carousel-control-next').addEventListener('click', changeCarouselPic);
}


	function showAlert(){
		// Get the element with id 'showAlert'
		const srcElement = $("#showAlert");
	
		// Check if the element exists
		if (srcElement.length) {
			// Remove the 'visually-hidden' class to show the alert
			srcElement.removeClass("visually-hidden");
	
			// Set a timeout to add the 'visually-hidden' class back after 4 seconds, hiding the alert
			setTimeout(() => {
				srcElement.addClass("visually-hidden");
			}, 4000);
		} else {
			console.error('Element with id "showAlert" not found.');
		}
	} 
