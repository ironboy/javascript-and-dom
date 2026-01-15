// Note: The short multiline comments before
// some of the template literals (/*html*/`...`)
// triggers the VSC extension leet-html (if installed)
// so that it highlights the string as HTML

// A number of "local" globals
// variables declared outside function are available
// in all code within the same file/module

// Read products from json file/url
let products = await (await fetch('products.json')).json();

export default function displayProducts(main, filterOnCategory = 'All products') {

  // If you want to make a variable a global add it 
  // to globalThis/window as a property
  // ADVANTAGE: 
  // You can now inspect the variable in the browser console
  globalThis.products = products;

  // Add som content inside main
  main.innerHTML = `
    <h1>Our products</h1>
    ${createCategorySelect(products, filterOnCategory)}
    <p>Some of our amazing products:</p>
    ${products
      .filter(({ category }) =>
        filterOnCategory === 'All products' || category === filterOnCategory)
      .map(({ name, description, price, category }) => /*html*/`
      <article>
        <h3>${name}</h3>
        <p><b>Category:</b> ${category}</b></p>
        <p>${description}</p>
        <p><b>Price:</b> ${price} SEK</p>
      </article>
    `).join('')}
  `;

  // Add event handler for changes to category filtering
  document.querySelector('select[name="filter-category"]').addEventListener('change', event => {
    // display products again with the new category filter value
    displayProducts(main, event.target.value);
  });

}

function getAllProductsCategories(products) {
  // What happens?
  // 1. We map so that we get an array of strings (categories) with a lot of duplicates
  // 2. We create set from the array - that removes all duplicates
  // 3. We convert the set to a new array using ... - the spread operator: [...somethingInterable]
  return ['All products', ...new Set(products.map(({ category }) => category))];
}

function createCategorySelect(products, filterOnCategory) {
  let categories = getAllProductsCategories(products);
  return `
    <label>
      Categories:
      <select name="filter-category">
        ${categories.map(category => /*html*/`
          <option
            ${category === filterOnCategory ? 'selected' : ''}
          >
            ${category}
          </option>
        `).join('')}
      </select>
    </label>
  `;
}