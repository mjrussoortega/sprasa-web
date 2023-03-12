// Menu

const open_menu = document.querySelector(".extra-menu__nav");
const closed_menu = document.querySelector(".closed-menu");
const menu = document.querySelector(".mobile-menu");
const backdrop = document.querySelector(".backdrop-menu");

function toggle_menu() {
    menu.classList.toggle("active");
    backdrop.classList.toggle("active");
}

open_menu.addEventListener("click", toggle_menu);

closed_menu.addEventListener("click", toggle_menu);

backdrop.addEventListener("click", toggle_menu);


// Search

const open_search = document.querySelector("#open-search");
const closed_search = document.querySelector("#closed-search");
const search_container = document.querySelector(".search");

function toggle_search() {
    search_container.classList.toggle("active");
}

open_search.addEventListener("click", toggle_search);
closed_search.addEventListener("click", toggle_search);
