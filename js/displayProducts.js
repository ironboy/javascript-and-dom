// In order to use await inside function we must tell 
// the JavaScript engine that we'll do that by adding async
// to the function declaration
export default async function displayProducts(main) {
  // Read products from json file
  let products = await (await fetch('products.json')).json();

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
}