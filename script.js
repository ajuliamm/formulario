document.querySelector('form')
.addEventListener('submit', (event) =>{
console.log("Enviar formulário")
/*não vai enviar o formulário or causa do preventDefault()*/
event.preventDefault()
})

const validation = (event) =>{
   const field = event.target

   //trocar mensagem de required
   field.setCustomValidity('Esse campo é obrigatório')

}

const fields = document.querySelectorAll('[required]')
for(field of fields){
    /* invalid é um evento que é possível usar quando o elemento chamado é o required*/
    field.addEventListener('invalid', validation)
}