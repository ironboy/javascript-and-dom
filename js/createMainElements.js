export default function createMainElements() {
  // Create an main element, append to body and return
  let main = document.createElement('main');
  document.querySelector('body').append(main);
  return main;
}