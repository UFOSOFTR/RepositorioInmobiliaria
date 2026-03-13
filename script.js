const hamburger = document.querySelector(".hamburger");
// Declara una constante llamada "hamburger".
// document.querySelector(".hamburger") selecciona el primer elemento
// del HTML que tenga la clase "hamburger".
// En este caso, es el botón del menú tipo hamburguesa.
const navMenu = document.querySelector(".nav-menu");
// Declara una constante llamada "navMenu".
// Selecciona el elemento que tiene la clase "nav-menu".
// Es la lista del menú de navegación.
// Al hacer clic, activamos el menú y la animación del icono
hamburger.addEventListener("click", () => {
// Agrega un "escuchador de eventos" (event listener).
// "click" indica que se ejecutará cuando se haga clic en el botón hamburguesa.
// () => { } es una función flecha (arrow function)
// que se ejecuta cuando ocurre el evento.
hamburger.classList.toggle("active");
// classList permite manipular las clases CSS de un elemento.
// toggle("active") agrega la clase "active" si no existe,
// o la elimina si ya existe.
// Esto normalmente activa la animación del icono hamburguesa.
navMenu.classList.toggle("active");
// Hace lo mismo que la línea anterior,
// pero sobre el menú de navegación.
// Agrega o quita la clase "active" para mostrar u ocultar el menú.
});
// Cierra la función del evento click.
// Opcional: Cerrar el menú cuando se hace clic en un enlace
document.querySelectorAll(".nav-link").forEach(n =>
// document.querySelectorAll(".nav-link")
// selecciona TODOS los elementos con la clase "nav-link".
// Devuelve una lista de nodos (NodeList).
// forEach recorre cada elemento de esa lista.
// "n" representa cada enlace individual.
n.addEventListener("click", () => {
// A cada enlace del menú se le agrega un evento "click".
// Cuando se hace clic en cualquier enlace, se ejecuta esta función.
hamburger.classList.remove("active");
// remove("active") elimina la clase "active"
// del botón hamburguesa.
// Esto devuelve el icono a su estado original.
navMenu.classList.remove("active");
// Elimina la clase "active" del menú.
// Esto hace que el menú se oculte después de seleccionar una opción.
}));
// Cierra la función del evento click.
// Cierra el forEach.
// Finaliza el bloque de código.