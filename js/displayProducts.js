import createCategorySelect from "./createCategorySelect.js";
import createSortSelect from "./createSortSelect.js";

// Note: The short multiline comments before
// some of the template literals (/*html*/`...`)
// triggers the VSC extension leet-html (if installed)
// so that it highlights the string as HTML

// A number of "local" globals
// variables declared outside function are available
// in all code within the same file/module

// Read products from json file/url
let products = await (await fetch('products.json')).json();

export default function displayProducts(
  main,
  filterOnCategory = 'All products',
  sortOn = 'A-Z'
) {

  // If you want to make a variable a global add it 
  // to globalThis/window as a property
  // ADVANTAGE: 
  // You can now inspect the variable in the browser console
  globalThis.products = products;

  // Add som content inside main
  main.innerHTML = `
    <h1>Our products</h1>
    ${createCategorySelect(products, filterOnCategory)}
    ${createSortSelect(sortOn)}
    <p>Some of our amazing products:</p>
    ${products
      .filter(({ category }) =>
        filterOnCategory === 'All products' || category === filterOnCategory)
      .sort((a, b) => {
        // using a POJO (a normal JS object - plain old JS object)
        // as a very terse alternative to switch case is sometimes rather readable
        return {
          'A-Z': () => a.name > b.name ? 1 : -1,
          'Z-A': () => b.name > a.name ? 1 : -1,
          'Price (low->high)': () => a.price - b.price,
          'Price (high->low)': () => b.price - a.price
        }[sortOn]();
        /*if (sortOn === 'A-Z') { return a.name > b.name ? 1 : -1; }
        if (sortOn === 'Z-A') { return b.name > a.name ? 1 : -1; }
        if (sortOn === 'Price (low->high)') { return a.price - b.price; }
        if (sortOn === 'Price (high->low)') { return b.price - a.price; }*/
      })
      .map(({ name, description, price, category }) => /*html*/`
      <article>
        <h3>${name}</h3>
        <p><b>Category:</b> ${category}</b></p>
        <p>${description}</p>
        <p><b>Price:</b> ${price} SEK</p>
      </article>
    `).join('')}
  `;

  // Event handler function for changes to any of our selects
  // When one the select change call displayProducts again
  // when the current values of both or selects
  let handler = () => {
    displayProducts(
      main,
      document.querySelector('select[name="filter-category"]').value,
      document.querySelector('select[name="sort"]').value
    );
  };

  // Add event handler for our two selects (filter select and sort select)
  document.querySelector('select[name="filter-category"]').addEventListener('change', handler);
  document.querySelector('select[name="sort"]').addEventListener('change', handler);
}