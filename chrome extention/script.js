let myLeads = ["chutiya", "madarchod", "bosdi"];
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");

const inputBtn = document.querySelector("#input-btn");
inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

for(let i = 0; i < myLeads.length; i++){
    ulEl.innerHTML += "<li>" +  myLeads[i] + "</li>";
}