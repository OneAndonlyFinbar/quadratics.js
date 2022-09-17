export declare class Quadratic {
    a: number;
    b: number;
    c: number;
    includesImaginary: boolean;
    constructor();
    /**
     * @param {string} equation
     * @returns {this}
     */
    fromString(equation: string): this;
    /**
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @returns {this}
     */
    fromInt(a: number, b: number, c: number): this;
    /**
     * @param {{a: number, b: number, c: number}} obj
     * @returns {this}
     */
    fromObject(obj: {
        a: number;
        b: number;
        c: number;
    }): this;
    /**
     * @return {string[] || number[]}
     */
    solve(): any[];
}
//# sourceMappingURL=Quadratic.d.ts.map