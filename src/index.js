import {aboutPizza} from '../modules/home';
import {ourMenu} from '../modules/menu';
import {contactUs} from '../modules/contact';

aboutPizza();

const content = document.getElementById("content");

const navListItem = document.querySelectorAll(".nav-link");
navListItem.forEach((item) => {
    item.addEventListener("click", e => {
        if (e.target.id === "Home") {
            content.innerHTML = "";
            aboutPizza();
            
        }else if (e.target.id === "Menu") {
            content.innerHTML = "";
            ourMenu();
        }else if (e.target.id === "Contact") {
            content.innerHTML = "";
            contactUs();
        }

        navListItem.forEach((item) => {
            item.classList.remove("active")
        })
        e.target.classList.add("active")
        
    })
})