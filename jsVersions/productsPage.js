import { createButton } from "./button.js"

const body = document.querySelector("body")

const productCard = document.createElement("div")
productCard.classList.add("product-card")

const image = document.createElement("img")

image.src = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D";

image.alt = "product"

const cardTitle = document.createElement("h3");
cardTitle.innerText = "Watch"

const productPrice =  document.createElement("p")
productPrice.innerText = "79 €"

const addToCard = createButton("Add To Card")
const readMore = createButton("Read More")

productCard.appendChild(image)
productCard.appendChild(cardTitle)
productCard.appendChild(productPrice)
productCard.appendChild(addToCard)
productCard.appendChild(readMore)


body.appendChild(productCard)