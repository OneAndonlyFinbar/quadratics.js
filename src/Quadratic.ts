export class Quadratic {
  a: number;
  b: number;
  c: number;
  includesImaginary: boolean;
  constructor() {
  }
  /**
   * @param {string} equation
   * @returns {this}
   */
  fromString(equation: string) {
    if(equation.match(/([+-]?\d+)x\^2([+-]?\d+)x+([+-]\s?\d+)/) === null)
      throw new Error('Invalid equation. Must be in form ax^2+bx+c');
    this.a = parseInt(RegExp.$1);
    this.b = parseInt(RegExp.$2);
    this.c = parseInt(RegExp.$3);
    return this;
  }
  /**
   * @param {number} a
   * @param {number} b
   * @param {number} c
   * @returns {this}
   */
  fromInt(a: number, b: number, c: number) {
    if(a === null || b === null || c === null)
      throw new Error('Missing terms.');
    this.a = a;
    this.b = b;
    this.c = c;
    return this;
  }
  /**
   * @param {{a: number, b: number, c: number}} obj
   * @returns {this}
   */
  fromObject(obj: { a: number, b: number, c: number }) {
    if(['a', 'b', 'c'].some(key => !obj.hasOwnProperty(key)))
      throw new Error('Invalid object. Must have properties a, b, and c');
    this.a = obj.a;
    this.b = obj.b;
    this.c = obj.c;
    return this;
  }
  /**
   * @return {string[] || number[]}
   */
  solve() {
    if(this.a === null || this.b === null || this.c === null)
      throw new Error('Missing terms, call #fromString #fromInt #fromObject before solving.');

    let plus, minus;
    this.includesImaginary = isNaN(Math.sqrt(Math.pow(this.b, 2) - 4 * (this.a * this.c)));

    if(!this.includesImaginary) {
      plus = ((-1 * this.b) + Math.sqrt(Math.pow(this.b, 2) - 4 * (this.a * this.c))) / (2 * this.a);
      minus = ((-1 * this.b) - Math.sqrt(Math.pow(this.b, 2) - 4 * (this.a * this.c))) / (2 * this.a);
    } else {
      const sqrtValue = Math.abs(Math.pow(this.b, 2) - 4 * (this.a * this.c));
      const real = (-1 * this.b) / (2 * this.a) as unknown as string;
      const imaginary = (Math.sqrt(sqrtValue) / (2 * this.a)) as unknown as string + 'i';
      minus = `${real}-${imaginary}`;
      plus = `${real}+${imaginary}`;
    }

    return [plus, minus].sort(function(a, b){return a - b});
  }
}