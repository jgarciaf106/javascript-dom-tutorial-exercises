let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let newIt = document.createElement("li");
	newIt.innerHTML = "Fourth element";

	document.querySelector("#myList").appendChild(newIt);
});
