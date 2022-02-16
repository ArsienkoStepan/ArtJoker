'use strict'
// Task 1
console.log('Task 1')
// решение черз функцию-генератор
function* fibonachi(n) {
    let firstTerm = 0;
    let secondTerm = 1;
    for( let i = 2; i <= n; i++) {
        let result = firstTerm + secondTerm;
        firstTerm = secondTerm;
        secondTerm = result;
        yield result;
    }
}
for (let k of fibonachi(7)) {
    console.log(k);
}
// решение через итерируемый объект
let fibonacciIteratorArray = {
  aTerm: 0,
  bTerm: 1,
  result: 0,
  [Symbol.iterator] () {
    return {
      current: this.aTerm,
      last: this.bTerm,
      sum: this.result,
      next() {
          if(this.current + this.last <= 89) {
            this.sum = this.current + this.last;
            this.current = this.last;
            this.last = this.sum;
            return {
              done: false, value: this.sum, 
            };
          } else {
            return {
              done: true
            }
        }
      }
    }
  }
}
for(let key of fibonacciIteratorArray) {
  console.log(key);
}
// решение через рекурсию
function fibonachiResursion(num) {
    if( num <= 1) {
        return num;
    } else {
        return fibonachiResursion(num - 1) + fibonachiResursion(num - 2);
    } 
}
console.log(fibonachiResursion(10));
// решение через мемоизированную функцию
function fibonacci(num) {
  let firstTerm = 0;
  let secondTerm = 1;
  let result = 0;
  for(let i = 1; i < num; i++) {
    result = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = result;
  }
  return result;
};
const memoizerFibonacci = (fn) => {
  let cache = {};
  return (n) => {
      if(cache[n] != undefined) {
          console.log(`Taking ${n} from cache`);
          return cache[n];
      }else {
          console.log(`Write ${n} in cache`);
          let result = fn(n);
          cache[n] = result;
          return result;
        }
  }
};
let memoized = memoizerFibonacci(fibonacci);
console.log(memoized(11));
console.log(memoized(11));
// отделяю задания в консоли
function separateTasks() {
    let separate = ' '
        for( let l = 0; l < 30; l++) {
            separate += '_ ';
}
        return separate;
}
console.log(separateTasks());
// Task 2
console.log('Task 2');
let palindrome = 'наган';
function chekIsPalindrome(str) {
    if(str.split('').reverse().join('') === str) return true;
    return false;
}
console.log(chekIsPalindrome(palindrome));
console.log(separateTasks());
// Task 3 
console.log('Task 3');
// Triangle
let mainCatheus = 5;
let aCatheus = 4;
let height = 7;
let hypotenuse = 12;
function countSquareOfTriangle(mainSideOfTriangle, heightOfTriangle) {
    return 0.5 * mainSideOfTriangle * heightOfTriangle;
}
function countPerimetrOfTriangle(aSide, bSide, hypotenuseOfTriangle) {
    return aSide + bSide + hypotenuseOfTriangle;
}
console.log('Площадь треугольника через функцию - ' + countSquareOfTriangle(mainCatheus, height));
console.log('Периметр треугольника через функцию - ' + countPerimetrOfTriangle(mainCatheus, aCatheus, hypotenuse));
let triangle = new Triangle(11, 7, 10, 19);
console.log(triangle);
console.log('Площадь треугольника через класс - ' + triangle.square());
console.log('Периметр треугольника через класс - ' + triangle.perimetr());
// rectangle
let shortSide = 5;
let longSide = 10;
function countPerimetrOfRectangle(aSideOfRectangle, bSideOfRectangle) {
    return 2 * (aSideOfRectangle + bSideOfRectangle);
}
function countSquareOfRectangle(aSideOfRectangle, bSideOfRectangle) {
    return aSideOfRectangle * bSideOfRectangle;
}
console.log('Периметр прямоугольника через функцию - ' + countPerimetrOfRectangle(shortSide, longSide));
console.log('Площадь прямоугольника через функцию - ' + countSquareOfRectangle(shortSide, longSide));
let rectangle = new Rectangle(7, 12);
console.log(rectangle);
console.log('Площадь прямоугольника через класс - ' + rectangle.square());
console.log('Периметр прямоугольника через класс - ' + rectangle.perimetr());
// circle
let radius = 5;
function countSquareOfCircle(r) {
    return (r ** 2) * Math.PI; 
}
function countCircleLength(r) {
    return 2 * Math.PI * r;
}
console.log('Длина круга через функцию - ' + countCircleLength(radius));
console.log('Площадь круга через функцию - ' + countSquareOfCircle(radius));
let circle = new Circle(12);
console.log(circle);
console.log('Площадь круга через класс - ' + circle.square());
console.log('Длина круга через класс - ' + circle.length());
console.log(separateTasks());
// Task 4 
console.log('Task 4');
let differentNumbersArray = [4, 1, 111, 32, -9, -45, 33, 0, 0, 0, 78];
let indexOfArray = -1;
let counterOfNegativeNumbers = 0;
function countNegativeNumbersOfArray(array) {
	indexOfArray++;
	if(array[indexOfArray] < 0) counterOfNegativeNumbers++;
	if(indexOfArray >= array.length) return; 
	countNegativeNumbersOfArray(array); 
}
countNegativeNumbersOfArray(differentNumbersArray);
console.log(`Количество отрицательных значений равно - ${counterOfNegativeNumbers}`);
let arrayIndex = -1;
let counterOfPositiveNumbers = 0
function countPositiveNumbersOfArray(array) {
    arrayIndex++;
    if(array[arrayIndex] > 0) counterOfPositiveNumbers++;
    if(arrayIndex >= array.length) return;
    countPositiveNumbersOfArray(array);
}
countPositiveNumbersOfArray(differentNumbersArray);
console.log(`Количество позитивных значений равно - ${counterOfPositiveNumbers}`)
let indexZeroArray = -1;
let counterZeroNumbers = 0;
function countZeroNumbersOfArray(array) {
    indexZeroArray++;
    if(array[indexZeroArray] === 0) counterZeroNumbers++;
    if(indexZeroArray >= array.length) return;
    countZeroNumbersOfArray(array);
}
countZeroNumbersOfArray(differentNumbersArray);
console.log(`Количество нулевых значений равно - ${counterZeroNumbers}`)
function sortOfArray(array){
    if (array.length == 0) return [];
    let a = [], b = [], p = array[0];
    for (let i = 1; i < array.length; i++)
     { if (array[i] < p) a[a.length] = array[i];
       else b[b.length] = array[i];
     }
    return sortOfArray(a).concat(p, sortOfArray(b));
}
console.log(sortOfArray(differentNumbersArray));
function maxElementOfArray(array) {
    let maxElement = sortOfArray(array);
    return maxElement[maxElement.length - 1];
}
console.log(`Максимальный элемент массива равен ${maxElementOfArray(differentNumbersArray)}`);
function minElementOfArray(array) {
    let maxElement = sortOfArray(array);
    return maxElement[0];
}
console.log(`Минимальный элемент массива равен ${minElementOfArray(differentNumbersArray)}`);
console.log(separateTasks());
// Task 5
console.log('Task 5');
function transformToDecimalSystem(num) {
    return num.toString().split('').reverse().map((item, index) => {
        return item * Math.pow(2, index);
    }).reduce((previous, current) => previous + current);
}
console.log(transformToDecimalSystem(101101));
function transformToBinarySystem(num) {
    return Number((num).toString(2));
}
console.log(transformToBinarySystem(45));
console.log(separateTasks());
// Task 6
console.log('Task 6');
function factorial(num) {
  let result = 1;
  for(let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(7));
function recursionFactorial(num) {
    if( num === 0) return 1;
    return num * recursionFactorial(num - 1);
}
console.log(recursionFactorial(7));
// факториал через мемоизированную функцию
function memoizedFactorial(fn) {
  let cache = {};
  return (n) => {
      if(n in cache) {
        console.log(`Taken ${n} from cache`);
        return cache[n];
      } else {
          let result = fn(n);
          cache[n] = result;
          console.log(`Write ${n} in cache`)
          return result;
        }
   }
};
let factorialWithMemory = memoizedFactorial(factorial);
console.log(factorialWithMemory(3));
console.log(factorialWithMemory(3));
console.log(separateTasks());
// Task 7
console.log('Task 7');
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
let matrixForAddition = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
function getTransposeMatrix(array) {
    return  matrix[0].map((item, i) => matrix.map(row => row[i]));
}
console.log(getTransposeMatrix(matrix));
function getMatrixSum(array, newArr) {
    let emptyArray = [];
    for(let i = 0; i < array.length; i++) {
      emptyArray[i] = [];
      for(let j = 0; j < array[i].length; j++) {
        emptyArray[i][j] = array[i][j] + newArr[i][j];
      }
    }
    return emptyArray;
}
console.log(getMatrixSum(matrix, matrixForAddition));
console.log(separateTasks());
// Task 8
console.log('Task 8');
let withZerosMatrix = [
    [1, 0, 3],
    [4, 5, 6],
    [0, 0, 0],
];
  function quantityOfZeroElements(array) {
    let quantityOfZeros = 0;
    for(let i = 0; i < array.length; i++) {
      for(let j = 0; j < array[i].length; j++) {
        if(array[i][j] === 0) {
          quantityOfZeros++;
        }
      }
    }
    return quantityOfZeros;
};
console.log(`Количество нулей в матрице - ${quantityOfZeroElements(withZerosMatrix)}`);
function sumOfElements(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            sum += array[i][j];
        }
    }
    return sum;
}
console.log(`Сумма элементов матрицы - ${sumOfElements(withZerosMatrix)}`);
function middleValueUnderDiagonal(array) {
    let emptyArr = [];
    for(let i = 0; i < array.length; i++) {
      for(let j = 0; j < i; j++) {
        emptyArr.push(array[i][j]);
      }
    }
    return emptyArr.reduce((previous, current) => previous + current) / emptyArr.length;
  };
  console.log(`Среднее значение элементов под диагональю - ${middleValueUnderDiagonal(matrix)}`);
  function middleValueAboveDiagonal(array) {
    let emptyArr = [];
    for(let i = 0; i < array.length; i++) {
      for(let j = i + 1; j < array.length; j++) {
        emptyArr.push(array[i][j]);
      }
    }
    return emptyArr.reduce((previous, current) => previous + current) / emptyArr.length;
  };
console.log(`Среднее значение элементов над диагональю - ${middleValueAboveDiagonal(matrix)}`);
console.log(separateTasks());
// Task 9
console.log('Task 9');
let matrixRawWithZero = [
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 9],
];
function deleteRowWithZero(array) {
    for(let i = 0; i < array.length; i++) {
      for(let j = 0; j < array[i].length; j++) {
        if(array[i][j] === 0) {
          array.splice(i, 1);
        }
      }
    }
    return array;
}
console.log(deleteRowWithZero(matrixRawWithZero));
let matrixColumnWithZero = [
    [1, 0, 3],
    [4, 5, 6],
    [7, 8, 9],
];
function deleteColumnWithZero(array) {
    let index;
    for(let i = 0; i < array.length; i++) {
      for(let j = 0; j < array[i].length; j++) {
        if(array[i][j] === 0) { 
          index = array[i].indexOf(array[i][j]);
        }
        if(j === index) {
          array[i].splice(j, 1);
        }
      }
    }
    return array;
}
console.log(deleteColumnWithZero(matrixColumnWithZero));
console.log(separateTasks());
// Task 10
console.log('Task 10');
// bind analogue
const user = {
  name: 'Stepan',
};
function contactInfo(phone, email) {
  console.log(`Имя: ${this.name}, Тел.:${phone}, Email: ${email}`)
};
function bind(fn, context, ...rest) {
  return function(...args) {
    const uniqId = Date.now().toString();
    context[uniqId] = fn;
    const result = context[uniqId](...rest.concat(args));
    delete context[uniqId];
    return result;
  }
};
bind(contactInfo, user)(+380660603306, 'stepa9chfc.ars@gmail.com');
// call analogue
function call(fn, context, ...args) {
  const uniqId = Date.now().toString();
  context[uniqId] = fn;
  const result = context[uniqId](...args);
  delete context[uniqId];
  return result;
};
call(contactInfo, user, +380660603306, 'stepa9chfc.ars@gmail.com');
let arrMethodsForAnalogue = [4, 8, 2, 5, 9, 1, 6, 0];
// map analogue
Array.prototype.mapAnalogue = function (callback, thisArg) {
  let context = this;
  let Obj = Object(this);
  if (arguments.length > 1) {
    context = thisArg;
  }
  let len = Obj.length;
  let newArray = [];
  let i = 0;
  while (i < len) {
    if (i in Obj) {
      newArray[i] = callback.call(context, this[i], i, Obj);
    }
    i++;
  }
  return newArray;
};
let mapped = arrMethodsForAnalogue.mapAnalogue(item => item * 2);
console.log(mapped);
// filter analogue
Array.prototype.filterAnalogue = function (callback, thisArg) {
  let context = this;
  let Obj = Object(this);
  if (arguments.length > 1) {
    context = thisArg;
  }
  let len = Obj.length;
  let res = [];
  for (let i = 0; i < len; i++) {
    if (i in Obj) {
      let current = this[i];
      if (callback.call(context, current, i, Obj)) {
        res.push(current);
      }
    }
  }
  return res;
};
let filtered = arrMethodsForAnalogue.filterAnalogue(item => item % 2 === 0);
console.log(filtered);
// reduce analogue
Array.prototype.reduceAnalogue = function (f, result) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < this.length; i++) {
    result = f(result, this[i], i, this);
  }
  return result;
};
let reduced = arrMethodsForAnalogue.reduceAnalogue((previous, current) => previous + current);
console.log(reduced);
// ForEach analogue
Array.prototype.forEachAnalogue = function (callback, thisArg) {
  let context = this;
  let Obj = Object(this);
  if (arguments.length > 1) {
    context = thisArg;
  }
  let len = Obj.length;
  let i = 0;
  while (i < len) {
    if (i in Obj) {
      callback.call(context, this[i], i, Obj);
    }
    i++;
  }
};
arrMethodsForAnalogue.forEachAnalogue(item => console.log(item));