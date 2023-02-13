let form = document.querySelector('form');
form.addEventListener('submit',function(e){
	e.preventDefault();
	let phone = parseInt(document.querySelector('#phone').value);
	let name = document.querySelector('#name').value;
	let email = document.querySelector('#email').value;
	let username = document.querySelector('#username').value;
	let Password = document.querySelector('#Password').value;
	let cpassword = document.querySelector('#cpassword').value;
	let a1 = document.querySelector('#a1');
	let a2 = document.querySelector('#a2');
	let a3 = document.querySelector('#a3');
	let a4 = document.querySelector('#a4');
	let a5 = document.querySelector('#a5');
	let a6 = document.querySelector('#a6');
	let result = document.querySelector('#result');
	if((phone===" ")||(phone<0)||(isNaN(phone))){
		a1.innerHTML="Enter the valid number";
		a1.style.color="red";
	}
	else if(Password!==cpassword){
		a6.innerHTML="Password dosn't match";
		a6.style.color="red";
	}
});