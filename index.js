// etiqueta html => button, p, div, h1 ...
// clases => .elemento
// id => #elemento
// atributo => [class=elemento]

const button = document.querySelector('button');
const element = document.querySelector('div');

const local_value = localStorage.getItem('texto_local');
alert(local_value);

button.addEventListener('click', function () {
    localStorage.setItem('texto_local', element.textContent);
    localStorage.setItem('test', element.textContent);
});
