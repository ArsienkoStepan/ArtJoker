class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    square() {
        return (this.radius ** 2) * Math.PI;
    }
    length() {
        return 2 * Math.PI * this.radius; 
    }
}
