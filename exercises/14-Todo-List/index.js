// Your code here
const task = document.getElementById("addToDo");
const list = document.querySelector("ul");
const taskList = document.querySelectorAll(".fa-trash");

task.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		let newTask = document.createElement("li");
		newTask.innerHTML = `<span><i class="fa fa-trash"></i></span> ${task.value}`;
		list.appendChild(newTask);
	}
});

for (const task of taskList) {
	task.addEventListener("click", function() {
		this.parentNode.removeChild(this);
	});
}
