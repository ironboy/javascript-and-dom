// Create an html element
let main = document.createElement('main');

// Grab the body element
// querySelector(cssSelector) - grab any element in the DOM
// using the same css selector syntax as the one we us in CSS files
// (variant querySelectorAll for a list elements)
let body = document.querySelector('body');

// Add the main element we just created to the body
body.append(main);