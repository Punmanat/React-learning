
const square = (x) => x * x;

const add = (a, b) => a + b;

const subtract = (a,b) => a - b;

// ---- named exports ----

// export { square, add };
// export const square = (x) => x * x;
// export const add = (a,b) => a + b;

// ---- default exports ----
// ---- name from import is not fixed ----

// export { square, add, subtract as default };
// export default subtract
// export default (a, b) => a - b;

//exports - default export - named exports

// Import
// import subtract, {square, add} from './util.js'
