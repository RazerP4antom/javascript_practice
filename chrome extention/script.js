let myLeads = [];
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li>
        <a target='_blank' href='${leads[i]}'> 
         ${leads[i]} 
        </a>
      </li>`;
  }
  ulEl.innerHTML = listItems;
}

const inputBtn = document.querySelector("#input-btn");
inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

const deleteBtn = document.querySelector("#delete-btn");
deleteBtn.addEventListener("click", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
