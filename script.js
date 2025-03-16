const input_box = document.querySelector(".notes-container");
const delete_button = document.querySelector("delete");
const add_button = document.querySelector(".add-button");
let notes = document.querySelector(".input-box");

add_button.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    input_box.appendChild(inputbox).appendChild(img);
    })

 input_box.addEventListener("click", function(e) {
   if (e.target.tagName === "IMG") {
       e.target.parentElement.remove();
   }
});