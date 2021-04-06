const fields = document.querySelectorAll("[required]")

console.log(fields)

function customValidation(event) {
	const field = event.target

	//trocar mensagem de required
	field.setCustomValidity("Esse campo é obrigatório")

}

for (field of fields){
	field.addEventListener("invalid", customValidation);
}


















































document.querySelector("form")


.addEventListener("submit", event => {
	console.log("enviar o formulário")

	//event.preventDefault()
})