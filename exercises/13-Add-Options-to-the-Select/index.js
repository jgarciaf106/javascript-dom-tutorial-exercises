window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	countries.forEach(country => {
		let newOption = document.createElement("option");
		newOption.innerHTML = country;
		document.querySelector("#mySelect").appendChild(newOption);
	});

	document.addEventListener("change", () => {
		let optionSelected = document.querySelector("#mySelect").value;
		alert(optionSelected);
	});
};
