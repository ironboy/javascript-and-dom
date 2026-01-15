// Read products from json file
let products = await(await fetch('products.json')).json();

// Create an main element
let main = document.createElement('main');

// Add som content inside main
main.innerHTML = `
  <h1>Our products</h1>
  <p>Some of our amazing products:</p>
  ${products.map(({ name, description, price }) => /*html*/`
    <article>
      <h3>${name}</h3>
      <p>${description}</p>
      <p><b>Price:</b> ${price} SEK</p>
    </article>
  `).join('')}
`;

// Append main to body
document.querySelector('body').append(main);