export default function createSortSelect(sortOn) {
  let sortTypes = ['A-Z', 'Z-A', 'Price (low->high)', 'Price(high->low)'];
  return /*html*/`
    <label>
      &nbsp;&nbsp;Sort:
      <select name="sort">
        ${sortTypes.map(type => /*html*/`
          <option ${sortOn === type ? 'selected' : ''}>
            ${type}
          </option>
        `)}
      </select>
    </label>
  `;
}