const LOCAL_STORAGE_NAME = 'favorites';


const products = document.querySelectorAll('.product');
let favorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME)) || [];

renderFavorites();

products.forEach(product => {

    const title = product.children[0].textContent;
    const img = product.children[1].src;
    const button = product.children[2];

    button.addEventListener('click', function() {
        
        // Comprobamos si el title ya existe en localStorage
        if( favorites.some(el => el.title === title) ) {

            favorites = favorites.filter(fav => fav.title !== title);

        } else {

            favorites.push({title, img});

        }

        renderFavorites();

        localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(favorites));
    });
});


function renderFavorites() {
    const favorites_list = document.querySelector('.favorites');

    favorites_list.innerHTML = '';
    favorites.forEach(el => {
        favorites_list.innerHTML += `<li>${el.title} <img src="${el.img}"></li>`;
    });
}