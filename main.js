$(document).ready(() => {
    const display = $("#display");
    const form = $("#form");
    const todoUserInput = $("#todoUserInput");

    const resetTodosInput = () => {
        todoUserInput.val("");   
    }

    const buildIDS = () => {
        return {
            editID: "edit_" + todo._id,
            deleteID: "delete_" + todo._id,
            listItemID: "listItem_" + todo._id,
            todoID: "todo_" + todo._id
        }
    }

    const builtTemplate = (todo, ids) => {
        return `<li class="list-group-item" id="${id.listItemID}>
            <div class="row">
                <div class="col-md-4" id="${ids.todoID}">${todo.todo}</div>
                <div class="col-md-4"></div>
                <div class="col-md-4 text-right">
                    <button type="button" class="btn btn-secondary" id="${ids.editID}">Edit</button>
                    <button type="button" class="btn btn-danger" id="${ids.deleteID}">Delete</button>
                </div>
            </div>
        </li>`
    }

    const displayTodos = (data) => {
        data.forEach((todo) => {
            let ids = buildIDS(todo);
            display.append(builtTemplate(todos, ids));
            editTodo(todo, ids.todoID, ids.editID);
            deleteTodo(todo, ids.listItemID, ids, deleteID);
        });
    }

});