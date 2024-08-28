// const body = document.querySelector("body");

// const buttonAdd = document.createElement("button");
// buttonAdd.innerText = "Add Product";
// body.appendChild(buttonAdd);

// const buttonUpdate = document.createElement("button");
// buttonUpdate.innerText = "Update Product";
// body.appendChild(buttonUpdate);

// const buttonDelete = document.createElement("button");
// buttonDelete.innerText = "Delete Product";
// body.appendChild(buttonDelete);


import { createButton } from "./button.js";
const body = document.querySelector("body");

body.appendChild(createButton("Add Product"));
body.appendChild(createButton("Update Product"));
body.appendChild(createButton("Delete Product"));