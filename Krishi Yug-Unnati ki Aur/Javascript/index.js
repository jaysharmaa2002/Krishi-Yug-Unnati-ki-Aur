// js api code for contact form using www.emailjs.com
function sendMail(params) {
	alert("Your form has been submitted successfully!");
	var tempParams = {
		name: document.getElementById("name").value,
		country: document.getElementById("countryId").value,
		state: document.getElementById("stateId").value,
		city: document.getElementById("cityId").value,
		phone: document.getElementById("phone").value,
		email: document.getElementById("email").value,
		message: document.getElementById("message").value,
	};
	emailjs.send('service_5lpnk2w', 'template_4ky1a8v', tempParams)
		.then(function (res) {
			console.log("sucess", res.status);
		})

}
//api code ends here also added some code in header related to this api

//Part of profile--on every page
function menuToggle(){
	const toggleMenu = document.querySelector('.menu');
	toggleMenu.classList.toggle('active')
}


var menu = document.getElementById('menu');
    
// When the user clicks anywhere outside of the menu, close it
window.onclick = function(event) {
	if (event.target == menu) {
		menu.style.display = "none";
	}
}


function myFunction() {
	var element = document.body;
	element.classList.toggle("dark-mode");
 }