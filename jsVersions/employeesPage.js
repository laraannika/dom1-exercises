const body = document.querySelector("body");
// div .employee-card
const employeeCard = document.createElement("div");
employeeCard.classList.add("employee-card");
// img image
const image = document.createElement("img");
image.src =
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBvcnRyYWl0fGVufDB8fDB8fHww";
image.alt = "Anton Müller portrait";
// h3 name
const cardName = document.createElement("h3");
cardName.innerText = "Anton Müller";
// p role
const role = document.createElement("p");
role.innerText = "Marketing";
// a link
const link = document.createElement("a");
link.innerText = "Email me";
employeeCard.appendChild(image);
employeeCard.appendChild(cardName);
employeeCard.appendChild(role);
employeeCard.appendChild(link);
body.appendChild(employeeCard);