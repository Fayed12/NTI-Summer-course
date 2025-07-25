class Shape {
    constructor(name) {
        this.name = name;
    }

    getArea() {
        console.error("Area must be implemented in subclass");
    }

    getPerimeter() {
        console.error("Perimeter must be implemented in subclass");
    }

    toString() {
        return `${this.name}:
        Area = ${this.getArea().toFixed(2)}
        Perimeter = ${this.getPerimeter().toFixed(2)}`;
    }
}

export class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

    getArea = () => this.width * this.height;

    getPerimeter = () => 2 * (this.width + this.height);
}

export class Square extends Shape {
    constructor(side) {
        super("Square");
        this.side = side;
    }

    getArea = () => this.side ** 2;

    getPerimeter = () => 4 * this.side;
}

export class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    getArea = () => Math.PI * this.radius ** 2;

    getPerimeter = () => 2 * Math.PI * this.radius;
}
