module('Rectangle intersection');

/*
Your task is to create three classes with correct inheritance setup.

  Shape class is an abstract figure class and only holds its position.
  Constructor: Shape(x, y)
  Methods:
    shape.getX() must return x coordinate
    shape.getY() must return y coordinate

  Constructor: Rectangle(x, y, width, height)
    x and y hold position of rectangles' top-left corner
  Inherits from: Schape
  Methods:
    rectangle.getWidth() must return width
    rectangle.getHeight() must return height
    rectangle.intersects(anotherRectangle) must return true if two rectangles intersect and false otherwise
      do not forget to check if argument is actually a rectangle

  Constructor: Square(x, y, size)
  Inherits from: Rectangle
  Methods: none

Aim of task is to be able to correctly calculate intersections between Rectangle and its subclass Square
*/


// Write your classes here
// ---

function Shape(x, y) {
  this.x = x;
  this.y = y;
  this.getX = function () {
    return this.x;
  }
  this.getY = function () {
    return this.y;
  }
}

function Rectangle(x, y, width, height) {
  Shape.apply(this, [x, y]);
  this.width = width;
  this.height = height;
  this.getWidth = function () {
    return this.width;
  }
  this.getHeight = function () {
    return this.height;
  }
  this.intersects = function (anotherRectangle) {
    if (!anotherRectangle instanceof Rectangle) return "Type error";
    let left = Math.max(this.x + this.width, anotherRectangle.x + this.width);
    let top = Math.min(this.y + this.height, anotherRectangle.y + anotherRectangle.height);
    let right = Math.min(this.x, anotherRectangle.x);
    let bottom = Math.max(this.y, anotherRectangle.y);
    let width = left - right;
    let height = top - bottom;
    if (width < 0 || height < 0) {
      return false;
    }
    return true;
  }
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

function Square(x, y, size) {
  Rectangle.apply(this, [x, y, size, size]);
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
// ---

test('Inheritance chain is valid', function () {
  var constructors = [
    typeof Shape,
    typeof Square,
    typeof Rectangle
  ];

  for (var i = 0; i < constructors.length; i++) {
    if (constructors[i] !== 'function') {
      ok(false, 'Constructors are not defined');
      return;
    }
  }

  // Prototypal inheritance is correct
  notEqual(Shape.prototype, Rectangle.prototype);
  notEqual(Square.prototype, Rectangle.prototype);
  notEqual(Square.prototype, Shape.prototype);

  // constructor property points to correct function
  equal(Shape.prototype.constructor, Shape);
  equal(Rectangle.prototype.constructor, Rectangle);
  equal(Square.prototype.constructor, Square);

  var rectangleOne = new Rectangle(-100, -100, 2, 4);
  var rectangleTwo = new Rectangle(10, 5, 4, 6);

  var squareOne = new Square(0, 0, 20);
  var squareTwo = new Square(5, 5, 10);

  // Prototypal inheritance chain is correct
  equal(rectangleOne instanceof Shape, true);
  equal(rectangleOne instanceof Rectangle, true);

  equal(squareOne instanceof Shape, true);
  equal(squareOne instanceof Rectangle, true);
  equal(squareOne instanceof Square, true);

  // Methods work as expected
  equal(rectangleOne.intersects(rectangleTwo), false);
  equal(rectangleOne.intersects(squareOne), false);

  equal(squareOne.intersects(squareTwo), true);
  equal(squareOne.intersects(rectangleTwo), true);
});