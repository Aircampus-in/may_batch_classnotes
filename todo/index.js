let form = document.querySelector("#new-form");
let input = document.querySelector("#new-input");
let button = document.querySelector("#submit-btn");
let tasks = document.querySelector("#tasks");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // to prevent reloading of the page

  let task = input.value;
  if (task.length > 1) {
    let task_element = document.createElement("div");
    task_element.classList.add("task");

    let task_content_element = document.createElement("div");
    task_content_element.classList.add("content");

    task_element.append(task_content_element);

    let task_input_element = document.createElement("input");
    task_input_element.classList.add("text");
    task_input_element.type = "text";
    task_input_element.value = task;
    task_input_element.setAttribute("readonly", "readonly");

    task_content_element.append(task_input_element);

    let task_actions = document.createElement("div");
    task_actions.classList.add("actions");

    let edit_button = document.createElement("button");
    edit_button.classList.add("edit");
    edit_button.innerText = "Edit";

    let delete_button = document.createElement("button");
    delete_button.classList.add("delete");
    delete_button.innerText = "Delete";

    task_actions.append(edit_button);
    task_actions.append(delete_button);

    task_element.append(task_actions);

    tasks.append(task_element);

    //   functionalities

    input.value = "";

    edit_button.addEventListener("click", (e) => {
      if (edit_button.innerText == "Edit") {
        edit_button.innerText = "Save";
        task_input_element.removeAttribute("readonly");
      } else {
        edit_button.innerText = "Edit";
        task_input_element.setAttribute("readonly", "readonly");
      }
    });

    delete_button.addEventListener("click", (e) => {
      tasks.removeChild(task_element);
    });
  }
});
