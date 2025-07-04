const form = document.getElementById("quote-form")
console.log(form)


let quoteCount = Number(0)

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    
    
    const text =document.getElementById("citation-input").value
    const author =document.getElementById("author-input").value 
    console.log(text, author)
    addQuote(text,author)
})


const addQuote = (text,author) => {
    quoteCount += 1
    document.getElementById("count").innerText=quoteCount
    
    const paragraphText= document.createElement("p")
        paragraphText.classList.add("text")
        paragraphText.innerText = text
    const paragraphAuthor= document.createElement("p")
        paragraphAuthor.classList.add("author")
        paragraphAuthor.innerText = author

    const divQuote = document.createElement("div")
    divQuote.classList.add("quote")
    divQuote.appendChild(paragraphText)
    divQuote.appendChild(paragraphAuthor)
    document.getElementById("quote-list").appendChild(divQuote)
}
