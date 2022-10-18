document.querySelector('form')
.addEventListener('submit', (event) =>{
console.log("Enviar formulário")
/*não vai enviar o formulário or causa do preventDefault()*/
event.preventDefault()
})

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
    /* invalid é um evento que é possível usar quando o elemento chamado é o required*/
    field.addEventListener('invalid', validation)
}