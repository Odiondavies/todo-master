window.addEventListener("load", ()=> {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks")

    form.addEventListener("submit", (e)=> {
        e.preventDefault;

        const task = input.value

        if(!task){
            alert("Please fill in a task")
            return
        }

        const task_el = document.createElement("div");
        task_el.classList.add("tasks")

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content")
        // task_content_el.innerText = task

        task_el.appendChild(task_content_el)

        // input tags

        const task_input_el = document.createElement("input")
        task_input_el.type = "text"
        task_input_el.classList.add("text")
        task_input_el.value = task
        task_input_el.setAttribute("readonly", "readonly")

        task_content_el.appendChild(task_input_el)

        // buttons
        const task_action_el = document.createElement("div")
        task_action_el.classList.add("actions")
        
        // for edit button
        const task_edit_btn = document.createElement("button")
        task_edit_btn.classList.add("edit")
        task_edit_btn.innerHTML = "Edit"

        //for delete button
        const task_delete_btn = document.createElement("button")
        task_delete_btn.classList.add("delete")
        task_delete_btn.innerHTML = "Delete"


        // append the buttons to the action
        task_action_el.appendChild(task_edit_btn)
        task_action_el.appendChild(task_delete_btn)
        

        // append the actions to the content
        task_content_el.appendChild(task_action_el)

        // appending to the main task div
        list_el.appendChild(task_el)


        // for the edit buttons functionality
        task_edit_btn.addEventListener("click", (e)=> {
            if(task_edit_btn.innerText.toLowerCase() == "edit"){
                task_input_el.removeAttribute("readonly")
                task_input_el.focus()
                task_edit_btn.innerText = "Save"
            }else{
                task_input_el.setAttribute("readonly","readonly")
                task_edit_btn.innerText = "Edit"
            }
            
        })

        task_delete_btn.addEventListener("click", ()=> {
            list_el.removeChild(task_el)
        })

        
    })
})