# Input
The program accepts user input in two main forms. Firstly, users can type in task descriptions into the input field. This field comes with a placeholder text that instructs users on what to enter. Secondly, users can interact with the "Add Task" button to add tasks to the to-do list, or the "Delete" button to remove tasks.

# Process
When a user types a task description and clicks "Add Task", the task is processed. This action triggers the addTodo function, which checks if the input field is not empty, and then updates the state of the todos array by adding the new task to the list. If the "Delete" button is clicked, the removeTodo function is executed. This function updates the state of the todos array by removing the selected task.

# Output
The output is a dynamically updated list of to-do tasks. Each time the state of the todos array is updated, the component re-renders, and the list on the page reflects the current state of the todos array. The tasks are displayed on the page in the order they were added, and any deleted tasks are removed from the list.