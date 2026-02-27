export interface shape{
    area(): number;

}

export class Circle implements shape {
    constructor(private r: number) { }
    public area(): number {
        return Math.PI * this.r * this.r;

    }
}

export type Shape2 = {
    area(): number;
};

export class Square implements Shape2 {
    constructor(private side: number) { }
    public area(): number {
        return this .side *  this.side;
    }
}
const c = new

    
    Circle(5);
console.log("[Q11] Circle area =", c.area());

const s = new Square(4);
console.log("[Q11] Square area =", s.area());

// npx ts-node --esm src/q11-interface-vs-type-extensibility/interface-vs-type.ts  
