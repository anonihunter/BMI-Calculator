function greet (name = 'Guest') {
    console.log(`Hello, ${name}!`);
}

greet('Alice');
greet();

console.log('');

function sumAll (...value) {
    return value.reduce((acc, num) => acc + num, 0);
    
}

console.log(sumAll(1, 2, 3, 4));

console.log('');

function power (base, exponent) {
    power = base ** exponent;
    return power;
}

console.log(power(7, 3));

function factorial (x) {
    if(x === 0) {
        return 1;
    } else {
        return x * factorial (x - 1);
    }
}

console.log(factorial(4));

console.log('');

function delayedGreet (name = 'Guest', delay) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`)
    }, delay);
}

// delayedGreet('Alice', 5000);


function findLargest (...num) {
    const Max = Math.max(...num);
    console.log(`Largest Number is: ${Max}`);
    return Max;
}

findLargest(1, 9, 8, 33, 2, 41);

console.log('');

function filterAndDoubleEven (...num) {
    const result = num.filter(num => num % 2 === 0) // .map(num => num * 2);
    const DoubleEven = result.map(num => num * 2);
    console.log(`Filter Even: ${result} Double Even: ${DoubleEven}`);
    return DoubleEven;
}

filterAndDoubleEven(1, 2, 3, 4, 5);

console.log('');

function outer(){
    let counter = 0;
        return function closureCounter () {
            counter++;
            console.log(counter);
    };
}
const count = outer();
count();
count();
count();

console.log('');

function multiplyBy (factor) {
    return function multipleNumber (num) {
        return num * factor;
    };
}

const doDouble = multiplyBy(2);
console.log(doDouble(5));

const doTriple = multiplyBy(3);
console.log(doTriple(5));

console.log('');

/* async function fetchData() {

    console.log("Fetching Data");

    // Simulate an API call using setTimeout wrapped in a Promise

    const data = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({id: 1, name: 'John Loe', age: 30});
        }, 2000);
    });

    console.log("Data Received:", data);
    return data;
}

fetchData().then((result) => {
    console.log("Fetch Completed", result);
}); */

console.log("");
// Practice Objects 

const book = {
    Title: "Javascript Basics",
    Author: "John Doe",
    Pages: 250
};

console.log(book.Title);
console.log(book["Title"]);

book.PublishedYear = 2021;
book.Pages = 300;

console.log(book);

delete book.Author;

console.log(book);
console.log("Title" in book);
console.log("Author" in book);

let Calculator = {
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    }
};

console.log(Calculator.add(3, 2));
console.log(Calculator.sub(3, 2));

const Student = {
    name: "Alice",
    grades: {
        math: 95,
        science: 88
    }
};

console.log(Student.grades);
console.log(Student.grades["science"]);

for(let key in book){
    console.log(key + ": " + book[key]);
};

console.log(Object.entries(book));

const person1 = {
    name: "Alice",
    age: 25
};

const person2 = {
    name: "Bob",
    age: 30
};

const combined = {
    ...person1,
    ...person2 // Actually Combining of Two Objects the Latest Object(person2) will overwrite the Previous Object(person1)...
}

console.log(combined);


const person = {
    name: "John",
    age: 30,
    greet: function() {
        return "My Name is " + this.name + " and i am " + this.age + " years old.";
    }
};

console.log(person.greet());

console.log("");

function createPerson(name, age) {
    return {
        Name: name,
        Age: age,
        introduce: function() {
            console.log(`Hello, I'm ${this.Name} and I'm ${this.Age} Years old`);
        }
    }
};

const person3 = createPerson('Alice', 25);
const person4 = createPerson('Bob', 30)

person3.introduce();
person4.introduce();

function addNumber(a, b) {
    return a + b;
}

let result = addNumber(2, 3);
console.log(result);

function greet(name) {
    console.log("Hi " + name + ", Welcome to Javascript!");
}

let cow = greet('Abhishek');
console.log(cow);

// function checkEvenOdd(start, end) {
//     for (let index = start; index <= end; index++) {
//         if (index % 2 === 0) {
//             console.log(index + " is even");
//         } else {
//             console.log(index + " is odd");
//     }   }
// }   

// checkEvenOdd(2, 9);

function checkEvenOdd(start, end) {

    let evenCount = 0; 
    let oddCount = 0; 
    let index = start;
    
    while (index <= end) {
        if (index % 2 === 0) {
            console.log(index + " is even");
            evenCount++
        } else {
            console.log(index + " is odd");
            oddCount++;
        }
        index++;
    }   
    
    console.log("Total Even Number: " + evenCount);
    console.log("Total odd Number: " + oddCount);
}   

checkEvenOdd(2, 8);

function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    console.log("Your BMI is: " + bmi);

    if (bmi < 18.5) {
        console.log("Category: Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log("Category: Normal weight");
    } else if (bmi >= 25 && bmi <= 29.9) {
        console.log("Category: Overweight");
    } else {
        console.log("Category: Obese");
    }
}


calculateBMI(55, 1.65)

