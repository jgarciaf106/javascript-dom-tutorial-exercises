let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let tag = document.createElement("H1");
	tag.innerHTML = "Hello World";
	tag.style.background = "yellow";

	document.body.appendChild(tag);
});
