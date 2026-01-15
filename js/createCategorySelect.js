function getAllProductsCategories(products) {
  // What happens?
  // 1. We map so that we get an array of strings (categories) with a lot of duplicates
  // 2. We create set from the array - that removes all duplicates
  // 3. We convert the set to a new array using ... - the spread operator: [...somethingInterable]
  return ['All products', ...new Set(products.map(({ category }) => category))];
}

export default function createCategorySelect(products, filterOnCategory) {
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