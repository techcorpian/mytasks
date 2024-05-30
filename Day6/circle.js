// 2. Circle

class Circle{
    constructor(radius, color=''){
        this.radius = parseFloat(radius).toFixed(2);
        this.color = color;
    }

    getRadius(){
        return this.radius;
    }

    setRadius(radius){
        this.getRadius = parseFloat(radius).toFixed(2);
    }

    getColor(){
        return this.color;
    }

    setColor(color){
        this.getColor = color;
    }

    toString() {
        return `Circle[radius = ${this.radius}, color = ${this.color}]`;
      }

    getArea(circle = [Circle]){
        let area = (Math.PI * circle.radius * circle.radius);
        return parseFloat(area).toFixed(2);
    }

    getCircumference(circle = [Circle]){
        let circumference = (2 * Math.PI * circle.radius);
        return parseFloat(circumference).toFixed(2);
    }

}

const circle1 = new Circle(1.0, 'red');
console.log(circle1.getCircumference(circle1));