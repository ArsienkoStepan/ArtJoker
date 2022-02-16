class Rectangle {
    constructor(catheus_a, catheus_b) {
        this.catheus_a = catheus_a;
        this.catheus_b = catheus_b;
    }
    square() {
        return this.catheus_a * this.catheus_b; 
    }
    perimetr() {
        return 2 * (this.catheus_a + this.catheus_b);
    }
}