// script.js
function addTodo() {
  const input = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");
  
  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  // Toggle completed state on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // ✅ Add delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.onclick = (e) => {
    e.stopPropagation(); // prevent triggering li click event
    li.remove();
  };

  li.appendChild(delBtn);
  list.appendChild(li);
  input.value = "";
}
