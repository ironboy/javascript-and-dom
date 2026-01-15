// Our products as an array of objects
let products = [
  { name: 'Ball', description: 'A bouncy ball.', price: 35 },
  { name: 'Rubber duck', description: 'Very rubbery duck', price: 62 },
  { name: 'Elephant', description: 'A cute toy elephant', price: 135 }
];

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
