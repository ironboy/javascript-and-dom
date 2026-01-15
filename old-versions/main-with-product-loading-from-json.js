// Load products from products.json
// await fetch(url) -> responseObject
// await responseObject.json() -> deserialize from json to a data structure
//
// what is await - some things take time in js (like reading a file/ an url etc)
// and await tells js to pause until we have a result to work with
let products = await(await fetch('products.json')).json();

let htmlForProducts = '';
for (let product of products) {
  htmlForProducts += `
    <article>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><b>Price:</b> ${product.price} SEK</p>
    </article>
  `;
}

// Create an html element
let main = document.createElement('main');

// Add som content inside main
main.innerHTML = `
  <h1>Our products</h1>
  <p>Some of our amazing products:</p>
  ${htmlForProducts}
`;

// Grab the body element
// querySelector(cssSelector) - grab any element in the DOM
// using the same css selector syntax as the one we us in CSS files
// (variant querySelectorAll for a list elements)
let body = document.querySelector('body');

// Add the main element we just created to the body
body.append(main);
