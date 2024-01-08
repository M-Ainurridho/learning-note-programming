"use strict";
// TypeScript doesn't have access to the DOM like JavaScript. This means that whenever we try to access DOM elements, TypeScript is never sure that they actually exist.
// const link = document.querySelector('a');
// console.log(link.href); // ERROR: Object is possibly 'null'. TypeScript can't be sure the anchor tag exists, as it can't access the DOM
// Here we are telling TypeScript that we are certain that this anchor tag exists
// const link = document.querySelector('a')!;
// console.log(link.href); // www.freeCodeCamp.org
// Form Element
// const form = document.getElementById('signup-form') as HTMLFormElement;
// form.addEventListener('submit', (e: Event) => {
//     e.preventDefault();
//     console.log(e.tarrget); // ERROR: Property 'tarrget' does not exist on type 'Event'. Did you mean 'target'?
// });
// console.log(form.method);
