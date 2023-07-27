document.getElementById("addButton").addEventListener("click", () => {
    const newTodoInput = document.getElementById("newTodo");
    const newTodoText = newTodoInput.value.trim();
  
    if (newTodoText !== "") {
      addTodoItem(newTodoText);
      newTodoInput.value = "";
    }
  });
  
  function addTodoItem(todoText) {
    const todoList = document.getElementById("todoList");
    const todoItem = document.createElement("li");
  
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", (event) => {
      const isChecked = event.target.checked;
      if (isChecked) {
        todoItem.classList.add("completed");
        todoList.appendChild(todoItem);
      } else {
        todoItem.classList.remove("completed");
        todoList.prepend(todoItem);
      }
    });
  
    const todoTextElement = document.createElement("span");
    todoTextElement.textContent = todoText;
  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      todoItem.remove();
    });
  
    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoTextElement);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
  }
  