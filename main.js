let addTodo = document.getElementById("addToDo");
let todoContainer = document.getElementById("todoContainer");
let inputFiled = document.getElementById("inputField");
let dark = document.querySelector("#dark-theme");
let body = document.getElementsByTagName("BODY")[0];
let light = document.querySelector("#light");

addTodo.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph-styling");
  paragraph.innerText = inputFiled.value;
  todoContainer.appendChild(paragraph);
  inputFiled.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
    paragraph.addEventListener("dblclick", function () {
      todoContainer.removeChild(paragraph);
    });
  });
});

//change theme
dark.addEventListener("click", () => {
  body.classList.remove("dark");
});

light.addEventListener("click", () => {
  body.classList.add("dark");
});
