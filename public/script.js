/*const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin,addEventListener("click", event => {
	event.preventDefault();


	const fields = [...document.querySelectorAll(".input-block input")];

	fields.forEach(field => {
		if (field.value === "") form.classList.add("validate-error")
	});

	const formError = document.querySelector(".validate-error");
		if(formError) {
			formError.addEventListener("animationend", (event) => {
			if(event.animationName ==="nono") {
			formError.classList.remove(".validate-error");
			}
		});
	} else { 
		form.classList.add("form-hide");
	}

});

	

form.addEventListener("animationstart", event =>{
	if(event.animationName ==="down") {
		document.querySelector("body").style.overflow = "hidden"
	}
});

form.addEventListener("animationend", () => {
	if(event.animationName === "down") {
		form.style.display ="none";
		document.querySelector("body").style.overflow = "none";
	}
});

/* background squares */

const ulSquares = document.querySelector("ul.squares");

for (let i =0; i < 21; i++) {
	const li = document.createElement("li");

	const size = Math.floor(Math.random() * (120 - 10) + 10);

	const position = Math.random() * (99 -1) + 1;

	const delay = Math.random() * (5, 0.1) + 0.1;

	const duration = Math.random() * (24 - 12) + 12;

	li.style.width= `${size}px`;
	li.style.height= `${size}px`;
	li.style.bottom= `-${size}px`;

	li.style.left = `${position}%`;

	li.style.animationDelay = `${delay}s`;
	li.style.animationDuration = `${duration}s`;
	li.style.animationTimingFunction = `cubic-bezier(${Math.random(),Math.random(),Math.random(),Math.random()})`;

	ulSquares.appendChild(li);


}



