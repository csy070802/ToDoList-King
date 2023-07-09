

input = document.querySelector(".todo_input")
btn = document.querySelector(".todo_add")
list = document.querySelector(".todolist")

const add_todo=()=> {

    console.log(input.value);
    new_todo = document.createElement('p');
    new_todo.innerHTML = input.value
    list.appendChild(new_todo);
    input.value=""

}

const del_todo=()=> {

    console.log()
}