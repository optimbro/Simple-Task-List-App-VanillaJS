let button = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let list = document.querySelector(".list");
let item = document.querySelector(".item");

function inputLength() {
  return input.value.length;
}

function createListElementItem() {
  const li = document.createElement("li");
  li.className = "item";
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  const dbtn = document.createElement("button");
  dbtn.className = "delete";
  dbtn.appendChild(document.createTextNode("Delete"));
  li.appendChild(dbtn);
}

function clickEvent() {
  if (inputLength() > 0) {
    createListElementItem();
  }
}

function keyPressEvent(e) {
  if (inputLength() > 0 && e.code === "Enter") {
    createListElementItem();
  }
}

button.addEventListener("click", clickEvent);

input.addEventListener("keypress", keyPressEvent);

list.addEventListener("click", (e) => {
  if (e.target.matches("li.item")) {
    console.log(e.target);
    e.target.classList.toggle("done");
  }

  if (e.target.matches("li.item button.delete")) {
    e.target.parentNode.style.opacity = '0';
    setTimeout(function () {
      e.target.parentNode.remove();
    }, 1000);
    
  }
});
