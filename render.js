export const render = (data) => {
    const todos = document.querySelector('#todos');

    const items = data.map((item,index) =>
        `<li><label><input type="checkbox" ${item.completed ? 'checked' : ""} id="${item.id}"
        /> ${item.title}</label></li>`
    );

    todos.innerHTML = items.join("");
}