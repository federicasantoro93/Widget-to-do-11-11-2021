import {getData, saveData} from "./index.js"


const update = (event) => {
    const id = parseInt(event.target.id);
    const newData = getData().map((item) => {
        if (item.id === id) {
            return {...item, completed: !item.completed };
        } else{
            return item;
        }
    });
    
    saveData(newData);
    render(newData);
    console.log(getData()[0].completed);

};

export const render = (data) => {
    const todos = document.querySelector('#todos');

    const items = data.map((item,index) =>
        `<li><label><input type="checkbox" ${item.completed ? 'checked' : ""} id="${item.id}"
        /> ${item.title}</label></li>`
    );

    todos.innerHTML = items.join("");

    const lis = [...todos.querySelectorAll("input")]; //SPREAD Converte una NodeList in Array
    lis.forEach((item) => {
        item.addEventListener("click",update);
    });
    
};

