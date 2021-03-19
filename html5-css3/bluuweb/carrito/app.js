/*
let carrito = { 1: {nombre: 'Item 1'}, 2: {nombre: 'Item 2'} };

console.log(carrito)

for(const key in carrito) { if(carrito.hasOwnProperty(key)){ const
element = carrito[key]; console.log(element) } }

Object.values(carrito).forEach(items => console.log(items));

console.log(Object.keys(carrito))
console.log(Object.keys(carrito).length)
*/

// ---- Use Template for create Fragments ----
// alway in template use .content
const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

// --- wait for Fully loaded DOM
document.addEventListener('DOMContentLoaded', () => {
    carritoData()
});

// ------ Fetch Elements ------
const carritoData = async () => {
    try {
      const response = await fetch('http://api.mocki.io/v1/11c371c4',
        { method: 'GET',
          mode: 'no-cors',
          headers: {'Content-Type': 'application/json' }
        }
      );
      const data = await response.json();
      console.log(data);
      // pintarCard(data);
    } catch (error) {
      // console.log(error);
    }
}

const pintarCard = (data) => {
  console.log(data);
  Object.keys(data).forEach(claves => console.log(claves))
    Object.values(data).forEach(producto => {
    templateCard.querySelector('h5').textContent = producto.first_name;
    templateCard.querySelector('p').textContent = producto.age;
    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)
  })
  items.appendChild(fragment)
}
































