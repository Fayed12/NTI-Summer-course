import { Rectangle, Square, Circle } from './shape.js';

const shapes = [
    new Rectangle(10, 20),
    new Square(15),
    new Circle(7)
];

// let x = new Rectangle(10,20)
// console.log(x)
// console.log(x.toString())

shapes.forEach(shape => console.log(shape.toString()));