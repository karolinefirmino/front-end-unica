
button.addEventListener('click', (e) => {
          let messages = []
          if (email.value === '' || email.value == null) {
              messages.push('O campo email é obrigatório')
              alert('O campo email é obrigatório')
          } 
          else {
              // Validação de Email com REGEX - INÍCIO 
              var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
              var isValid = false;
              if(email.value.lenght > 0 || email.value.match(mailformat))
                  {
                  console.log("Email Válido!")
                  true
                  isValid = true
              }
                  
              else
                  {
                  alert("Você inseriu um endereço de email inválido!!")
                  console.log('O campo password está em branco')
                  e.preventDefault()
                  errorElement.innerText = messages.join(', ')
                  isValid = false
                  }
                  
                  if (password.value.length == 0 || password.value == null ) {
                      messages.push('O campo senha é obrigatório')
                      alert('O campo senha é obrigatório')
                      console.log('O campo password está em branco')
                      password.focus()
                      e.preventDefault()
                      errorElement.innerText = messages.join(', ')
                      }
                  if(password.value.length > 6) {
                      console.log('A senha é válida!')} 
                  else {
                      console.log('A senha é inválida')
                      alert('Senha inválida')
                      console.log('A senhá foi preenchida, mas é inválida')
                      password.focus()
                      e.preventDefault()
                      errorElement.innerText = messages.join(', ')
                  }
                  }

      })













































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