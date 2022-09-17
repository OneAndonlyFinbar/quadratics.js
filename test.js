const { Quadratic } = require('./lib')
const roots = new Quadratic().fromString('1x^2+3x+10').solve();
console.log(roots);