const items = document.querySelectorAll('.item');
const buttons = document.querySelectorAll('.item__button');
const products = [];

items.forEach(el => {
    const text = el.childNodes[0].data;
    const button = el.children[0];

    button.addEventListener('click', function() {
        // Agregamos el elemento al array
        products.push(text);

        // Convertimos el array en formato JSON string
        const normalized_products = JSON.stringify(products);

        // Almacenamos el JSON string en un localStorage
        localStorage.setItem('products', normalized_products);
    })
});

const container_products = document.querySelector('.products');
const products_local = localStorage.getItem('products');
const normalized_products_local = JSON.parse(products_local);

normalized_products_local.forEach(el => {
    container_products.innerHTML += "<li>" + el + "</li>"; 
});