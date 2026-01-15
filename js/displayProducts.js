// Note: The short multiline comments before
// some of the template literals (/*html*/`...`)
// triggers the VSC extension leet-html (if installed)
// so that it highlights the string as HTML

// In order to use await inside function we must tell 
// the JavaScript engine that we'll do that by adding async
// to the function declaration
export default async function displayProducts(main) {
  // Read products from json file
  let products = await (await fetch('products.json')).json();

  // If you want to make a variable a global add it 
  // to globalThis/window as a property
  // ADVANTAGE: 
  // You can now inspect the variable in the browser console
  // globalThis.products = products;

  // Add som content inside main
  main.innerHTML = `
    <h1>Our products</h1>
    ${createCategorySelect(products)}
    <p>Some of our amazing products:</p>
    ${products
      .filter(({ category }) => category === 'Meat & Seafood')
      .map(({ name, description, price, category }) => /*html*/`
      <article>
        <h3>${name}</h3>
        <p><b>Category:</b> ${category}</b></p>
        <p>${description}</p>
        <p><b>Price:</b> ${price} SEK</p>
      </article>
    `).join('')}
  `;
}

function getAllProductsCategories(products) {
  // What happens?
  // 1. We map so that we get an array of strings (categories) with a lot of duplicates
  // 2. We create set from the array - that removes all duplicates
  // 3. We convert the set to a new array using the spread operator [...somethingInterable]
  return ['All products', ...new Set(products.map(({ category }) => category))];
}

function createCategorySelect(products) {
  let categories = getAllProductsCategories(products);
  return `
    <label>
      Categories:
      <select>
        ${categories.map(category => /*html*/`<option>${category}</option>`)}
      </select>
    </label>
  `;
}