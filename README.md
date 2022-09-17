# quadratics.js
Simple library to find roots of a quadratic equation.
# Examples
```ts
import { Quadratic } from 'quadratics.js';

// Make sure all terms have a coefficient, even if it's 1.
const realRoots = new Quadratic().fromString('1x^2+3x-10').solve();
console.log(realRoots); // [-5, 2]

const complexRoots = new Quadratic().fromInt(1, 3, 10).solve();
console.log(complexRoots); // [(-3+1.7320508075688772i), (-3-1.7320508075688772i)]

const fromObject = new Quadratic().fromObject({ a: 1, b: 3, c: -10 }).solve();
console.log(fromObject); // [-5, 2]
```