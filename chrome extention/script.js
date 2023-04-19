let myLeads = [];
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");

const inputBtn = document.querySelector("#input-btn");
inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  console.log(myLeads);
  inputEl.value = "";
  renderLeads();
});

const renderLeads = () => {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += "<li>" +  myLeads[i] + "</li>";
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li);
    listItems +=
      `<li>
        <a target='_blank' href='${myLeads[i]}'> 
         ${myLeads[i]} 
        </a>
      </li>`;
  }
  ulEl.innerHTML = listItems;
};
