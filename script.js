
/* document.querySelectorAll('.btn').forEach(buttonElement => {
    const button = bootstap.Button.getOrCreateInstance(buttonElement).button.toggle()
}) */

function changeCarouselPic (onclick, ) {

    document.querySelector('.carousel-control-prev')
}

// create function that returns this alert message:

/* function showAlert() {

    var srcElement = document.getElementById(showAlert);
         	if (srcElement != null) {
         		if (srcElement.style.display == "block") {
         			srcElement.style.display = 'none';
         		}
         		else {
         			srcElement.style.display = 'block';
         		}
         		return false;
         	}
} */
    
	function showAlert(){
		
		$("#showAlert").removeClass("visually-hidden");
		
		setTimeout(() => {
			$("#showAlert").addClass("visually-hidden");
		}, 4000);

	}    

    
