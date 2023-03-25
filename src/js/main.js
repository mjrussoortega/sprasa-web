// Menu

const open_menu = document.querySelector(".extra-menu__nav");
const closed_menu = document.querySelector(".closed-menu");
const menu = document.querySelector(".mobile-menu");
const backdrop = document.querySelector(".backdrop-menu");
const body = document.querySelector("body");

function toggle_menu() {
    body.classList.toggle("dropdown-active");
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


// Dark mode

const button_dark = document.querySelector("#dark-mode");

// Detectamos si el usuario tiene activo el tema dark en su ordenador en la primera visita a la web
if (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
}

// Detectamos el tema que elige el usuario

if (localStorage.getItem('theme') == 'dark') {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

button_dark.addEventListener('click', function () {
    let current_theme = localStorage.getItem('theme') == "dark" ? 'light' : 'dark';

    document.documentElement.classList.toggle('dark');

    localStorage.setItem('theme', current_theme);
});




// favorites 

const LOCAL_STOGARE_NAME = 'favorites';
const posts = document.querySelectorAll(".post");
let favorites = JSON.parse(localStorage.getItem(LOCAL_STOGARE_NAME)) || [];

renderFavorites();

posts.forEach(post => {
    const img = post.children[0].src;
    const title = post.children[1].textContent;
    const button = post.children[6];

    button.addEventListener('click', function () {

        //comprobamos si el title existe en localStorage
        if (favorites.some(el => el.title === title)) {
            favorites = favorites.filter(fav => fav.title !== title);
        }
        else {
            favorites.push({ img, title });
        }

        renderFavorites();

        localStorage.setItem(LOCAL_STOGARE_NAME, JSON.stringify(favorites));
    })

});


function renderFavorites() {
    const favorites_list = document.querySelector('.dropdown-favorites');

    favorites_list.innerHTML = '';

    favorites.forEach(el => {
        favorites_list.innerHTML += `<li> <img src="${el.img}"> <h3>${el.title}</h3> </li>`;
    })
}


