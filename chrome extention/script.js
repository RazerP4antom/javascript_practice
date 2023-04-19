let myLeads = [];
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
// localStorage.clear();

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

const inputBtn = document.querySelector("#input-btn");
inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  // myLeads = JSON.stringify(myLeads);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
  // console.log(localStorage.getItem("myLeads"));
  // console.log(getLeads());
});


function renderLeads(){
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += "<li>" +  myLeads[i] + "</li>";
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li);
    listItems += `<li>
        <a target='_blank' href='${myLeads[i]}'> 
         ${myLeads[i]} 
        </a>
      </li>`;
  }
  ulEl.innerHTML = listItems;
}