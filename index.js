import {render} from "./render.js"

const connectionAlert = () => {
    const isOnline = window.navigator.onLine;
    const connection= document.querySelector('#connection');
    connection.innerHTML = isOnline ? "online" : "offline";
};

//FUNCTION TO SAVE DATA IN LOCALSTORAGE
const saveData = (data) => {
    const str = JSON.stringify(data);
    localStorage.setItem('data', str);
};

const getData = () => {
    const value = localStorage.getItem("data") || "";
    return JSON.parse(value);
}

document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("online", connectionAlert);
    window.addEventListener("offline", connectionAlert);

    const API ="https://jsonplaceholder.typicode.com/todos";

    fetch(API)
    .then((response) => response.json())
    .then((data) => data.filter((item, index) => index < 20))
    .then((data) => saveData(data))
    .then(() => {
        render(getData());
    })

});