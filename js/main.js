// import code from other files/modules
// (in order for this to work the other files must have an export of 
//  the thing i want to use - like a function, an object)
import createMainElements from "./createMainElements.js";
import displayProducts from "./displayProducts.js";

let main = createMainElements();
displayProducts(main);