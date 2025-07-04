const form = document.getElementById("quote-form")
console.log(form)



form.addEventListener("submit", (event) =>{
    event.preventDefault()
    
    
    const text =document.getElementById("citation-input").value
    const author =document.getElementById("author-input").value 
    console.log(text, author)
})