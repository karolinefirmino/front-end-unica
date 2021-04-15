        // Campos do Formulário (Início dos Inputs/Campos do Formulário))
        var cpf = window.document.getElementById('cpf')
        var nome = window.document.getElementById('nome')
        var sobrenome = window.document.getElementById('sobrenome')
        var cep = window.document.getElementById('cep')
        var numero = window.document.getElementById('numero')
        var complemento = window.document.getElementById('complemento')
        var email = document.getElementById('email')
        var password = document.getElementById('password')
        var confirmar = window.document.getElementById('confirmPass')
        // Fim dos Campos (Inputs do Formulário)
        // ------------------------------------------------------------------
        // Botões do formulário já estão definidas (Funções da seção anterior)
        // ------------------------------------------------------------------- 
        var button = document.querySelector('.bnt-next-cad')
        // ---------------------------------------------------
        var form = document.querySelector('.form')
        var errorElement = document.getElementById('error')
        // ------------------------------------------------------------------

        // Verificando se os campos estão preenchidos --> 
        // CPF 

        form.addEventListener('click', (e) => {
            let messages = []
            /*if (cpf.value.length == 0 || password.value == null || cpf.value.lenght < 11) 
        {
            
            console.log("CPF Inválido")
            messages.push('O campo cpf é obrigatório')
            alert('O campo cpf é obrigatório')
            console.log('O campo cpf está em branco')
            cpf.focus()
            errorElement.innerText = messages.join(', ')

        }

        // Validação de CPF com REGEX - INÍCIO - Verificando se há a quantidade de 11 caracteres e formato
        var cpfFormat =/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/;
        if(cpf.value.lenght > 0 || cpf.value.match(cpfFormat)) 
        {
            console.log("CPF Válido!")
            true
        }
        else{
            console.log("CPF Inválido")
            messages.push('O campo cpf é obrigatório')
            alert('O campo cpf é obrigatório')
            console.log('O campo cpf está em branco')
            cpf.focus()
            errorElement.innerText = messages.join(', ')
        }
        // Verificação dos dígitos verificadores (Receita Federal)
        function validarCPF(inputCPF){
            var soma = 0;
            var resto;
            var inputCPF = document.getElementById('cpf').value;

            if(inputCPF == '00000000000') return false;
            for(i=1; i<=9; i++) soma = soma + parseInt(inputCPF.substring(i-1, i)) * (11 - i);
            resto = (soma * 10) % 11;

            if((resto == 10) || (resto == 11)) resto = 0;
            if(resto != parseInt(inputCPF.substring(9, 10))) return false;

            soma = 0;
            for(i = 1; i <= 10; i++) soma = soma + parseInt(inputCPF.substring(i-1, i))*(12-i);
            resto = (soma * 10) % 11;

            if((resto == 10) || (resto == 11)) resto = 0;
            if(resto != parseInt(inputCPF.substring(10, 11))) return false;
            return true;
            }*/
        
            e.preventDefault()
            
        // Fim da seção CPF - Fonte consultada/utilizada: https://pt.stackoverflow.com/questions/123741/validar-cpf-com-express%C3%A3o-regular-javascript
            
            checkInputs()
    })

    function checkInputs() {
        var cpfValue = cpf.value.trim()
        var nomeValue = nome.value.trim()
        var sobrenomeValue = sobrenome.value.trim()
        var cepValue = cep.value.trim()
        var numeroValue = numero.value.trim()
        var complementoValue = complemento.value.trim()
        var emailValue = email.value.trim()
        var passwordValue = password.value.trim()
        var confirmarValue = confirmar.value.trim()

        var cpfFormat = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/ ;
        if(cpfValue.lenght > 0 || cpf.value.match(cpfFormat)) {

            console.log("CPF Válido!")
            setSuccessFor(cpf)

        } else {
            // show error

            // add error class
        console.log("CPF Inválido!")
        setErrorFor(cpf, "CPF Inválido")
        cpf.focus()

        } 

        if(nomeValue === "") {
        console.log("Nome Inválido!")
        setErrorFor(nome, "O campo nome deve ter no mínimo 6 caracteres")
        nome.focus()

        } else{
            setSuccessFor(nome)
            console.log('Campo NOME válido/preenchido corretamente')
        }

        if(sobrenomeValue === "") {
        console.log("O campo Sobrenome é obrigatório.")
        setErrorFor(sobrenome, "O campo Sobrenome é obrigatório.")
        sobrenome.focus()
   
        } else{
            setSuccessFor(sobrenome)
            console.log('Campo SOBRENOME válido/preenchido corretamente')
        }

        var re = /\d{2}\.\d{3}\-\d{3}/
        if(cep.value.match(re) ){
            console.log("CEP Válido!")
            setSuccessFor(cep)
        } else{
            setErrorFor(cep, "CEP Inválido")
            console.log('CEP Inválido!')
            cep.focus()
  
        }

        if(numeroValue === "") {
            setErrorFor(numero, "O Campo Número é obrigatório.")
            console.log("O Campo Número é obrigatório.")
            numero.focus()
      
        }

        // Validação de Email com REGEX  
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.value.lenght > 0 || email.value.match(mailformat)){
                console.log("Email Válido!")
                setSuccessFor(email)
            } else
                {
                setErrorFor(email, "Email Inválido!")
                console.log("Email Inválido!")
                email.focus()
            
                }

        if(passwordValue === ""){
            setErrorFor(password, "O Campo Senha é obrigatório.")
            console.log("O Campo Senha é obrigatório.")
            password.focus()
        
        } else {
            console.log("Senha Válida!")
                setSuccessFor(email)
        }
        if(confirmarValue === ""){
            setErrorFor(confirmar, "O Campo Confirmar Senha é obrigatório.")
            console.log("O Campo Confirmar Senha é obrigatório.")
            confirmar.focus()

        } else if(confirmarValue !== password) {
            setErrorFor(confirmar, "Confirmação de Senha não correspondente")
            console.log("Confirmação de Senha não correspondente")
            confirmar.focus()
        } else {
            console.log("O campo Confirmar Senha é corresponde ao campo Senha!")
                setSuccessFor(confirmar)
        }
        
        // Validacao de Senhas com REGEX 
        


    }

    /*var strCEP = document.getElementById("cep").value;
    cep.value = formatarCEP(strCEP);
    function formatarCEP(str){
	var re = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/; // Pode usar ? no lugar do * \d{3}[.\s]?\d{3}[.\s]?\d{3}[-.\s]?\d{2}
    if(re.test(str)){
		return str.replace(re,"$1.$2-$3");
	}else{
		alert("CEP inválido!");
	}
	return "";*/

        function setErrorFor(input, message) {
            const formControl = input.parentElement //.form-control
            const small = formControl.querySelector('small')

            small.innerText = message

            formControl.className = "form-control error"

            return
        }

        function setSuccessFor(input) {
            const formControl = input.parentElement
            formControl.className = "form-control success"

        }











































/*var validade = document.getElementById('validate')

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validate() {
  const $result = $("#result");
  const email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text(email + " is valid :)");
    $result.css("color", "green");
  } else {
    $result.text(email + " is not valid :(");
    $result.css("color", "red");
  }
  return false;
}

validate.addEventListener("onclick", validate());*/