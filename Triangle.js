class Triangle {
    constructor(catheus_a, catheus_b, height, hypotenuse) {
        this.catheus_a = catheus_a;
        this.catheus_b = catheus_b;
        this.height = height;
        this.hypotenuse = hypotenuse;
    }
    square() {
        return  0.5 * this.catheus_a * this.height; 
    }
    perimetr() {
        return  this.catheus_a + this.catheus_b + this.hypotenuse;
    }
}
