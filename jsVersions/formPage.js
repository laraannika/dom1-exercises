import { createButton } from "./button.js";

const body = document.querySelector("body");

const formContainer = document.createElement("form");
formContainer.classList.add("form-container");

const labelName = document.createElement("label");
labelName.for = "";
labelName.innerText = "name ";
labelName.classList.add("label-name");

const inputName = document.createElement("input");
inputName.type = "text";


const labelMail = document.createElement("label");
labelMail.for = "";
labelMail.innerText = "email ";
labelMail.classList.add("label-mail");

const inputMail = document.createElement("input");
inputMail.type = "text";


const labelMessage = document.createElement("label");
labelMessage.for = "";
labelMessage.innerText = "message ";
labelMessage.classList.add("label-container");

const inputMessage = document.createElement("textarea");
inputMessage.name = "";
inputMessage.id = "";

formContainer.appendChild(labelName);
labelName.appendChild(inputName);
formContainer.appendChild(labelMail);
labelMail.appendChild(inputMail);
formContainer.appendChild(labelMessage);
labelMessage.appendChild(inputMessage);
formContainer.appendChild(createButton("Send"));
body.appendChild(formContainer);