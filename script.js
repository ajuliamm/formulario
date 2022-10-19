const fields = document.querySelectorAll('[required]')


function validateField(field){
    //lógica para verificar se existem erros 
    function verifyErros (){

        let foundError = false
    
        for(let error in field.validity){
            //se não for customError então verifica se tem erro
            if(field.validity[error]&& !field.validity.valid){
                foundError = error
            }
        }
        return foundError
        
       }
    
    function customMessage(typeError){
        const messages = {
            text: {
                valueMissing: 'Por favor, Preencha o nome.'
            },
            email:{
                valueMissing: ' Email é obrigatório', 
                typeMismatch: ' Por favor, preencha um email válido'
            }
        }

        return messages[field.type][typeError]
    }

    function setCustomMessage(message){
        const spanError = field.parentNode.querySelector('span.error')
       if(message){
        spanError.classList.add('active')
        spanError.innerHTML = message
       }
       else{
        spanError.classList.remove('active')
        spanError.innerHTML = ''
       }
    }
    
    return function(){
        const error = verifyErros()

        if(error){
            const message = customMessage(error)

            field.style.borderColor = 'red'
            setCustomMessage(message)
           }else{
            field.style.borderColor = 'green'
            setCustomMessage()
           }
       
}}

function customValidation (event) {
    
   const field = event.target
   const validation = validateField(field)
    
   validation()
  
}

for(let field of fields){
    /* invalid é um evento que é possível usar quando o elemento chamado é o required*/
    field.addEventListener('invalid', event => {
        //eliminar o buble
    event.preventDefault()

    customValidation(event)
    })
    field.addEventListener('blur', customValidation)
}


document.querySelector('form')
.addEventListener('submit', (event) =>{
console.log("Enviar formulário")
/*não vai enviar o formulário or causa do preventDefault()*/
event.preventDefault()
})


/*
const validation = (event) =>{
   const field = event.target

   
//lógica para verificar se existem erros 
   function verifyErros (){

    
    let foundError = false

    for(let error in field.validity){
        //se não for customError então verifica se tem erro
        if(error != "customError" && field.validity[error]){
            foundError = error
        }
    return foundError
    }

   }  
const error = verifyErros()
   console.log(error)


//trocar mensagem de required
   if(error){
   field.setCustomValidity('Esse campo é obrigatório')
   }else{
    field.setCustomValidity('')
   }
}

const fields = document.querySelectorAll('[required]')
for(let field of fields){
//invalid é um evento que é possível usar quando o elemento chamado é o required
    field.addEventListener('invalid', validation)
}
*/
