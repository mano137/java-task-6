//Array Higher order Methods//
//1//
let numbers= [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
numbers.forEach(function(num){
    console.log(num);
});//10 20 30 40 50 60 70 80 90 100
//2//
let number1= [10,20, 30, 40, 50];
let result=number1.map(function(num){
    return num * 5;
});
console.log(result); //(5) [50, 100, 150,200,250]
//3//
let number2 =[10, 25, 15, 30, 40, 5, 50];
let result1= number2.filter(function(num){
    return num > 20;
});
console.log(result1); //(4) [25, 30, 40,50]
//4//
let employees=[
    {name: "Ravi", salary: 250000},
    {name: "Selvi", salary: 350000},
    {name: "Rishi", salary: 200000},
    {name: "Meena", salary: 200000},
]
let result2 = employees.filter(function(emp){
    return emp.salary <= 300000;
});
console.log(result2); 
//0. {name: 'Ravi', salary: 250000}
//1. {name: 'Rishi', salary: 200000}
//2. {name: 'Meena', salary: 200000}
//5//
let employees1 = [
    {name: "Ravi", salary: 250000},
    {name: "Selvi", salary: 350000},
    {name: "Rishi", salary: 200000},
    {name: "Meena", salary: 200000}
];

let result3 = employees.find(function(emp) {
    return emp.salary > 200000;
});

console.log(result3); //{name: 'Ravi', salary: 250000}
//6//
let num =[10, 20, 30, 40, 50];
let total= num.reduce(function(sum,num){
    return sum + num;

}, 0);
console.log(total);//150//
//7//
let x = [10, 15, 25, 30, 45];

let result4 = x.some(function(num) {
    return num % 2 == 0;
});

console.log(result4);//true//
//8//
let result5= x.some(function(num) {
    return num > 0;
});

console.log(result5);//true//
//9//
let y =[2,34, 45, 56, 567, 73, 0]
let newSort= y.sort((a,b)=>{
    return a-b;
})
console.log(newSort);//[0, 2, 34, 45, 56, 73, 567]
//10//
let newSort1= y.sort((a,b)=>{
    return b-a;
})
console.log(newSort1);//[567, 73, 56, 45, 34, 2, 0]
//String Methods//
//11//
let str ="javascript";
console.log(str.charAt(4)); //s//
//12//
let str1 = "javascript";
console.log(str1.charCodeAt(2));//118//
//13//
let str2 = " Hello JavaScript ";
let result6= str2.trim();
console.log(result6); //Hello JavaScript//
//14//
let str3 = "Hello JavaScript";
console.log(str3.toUpperCase());//HELLO JAVASCRIPT//
console.log(str3.toLowerCase());//hello javascript//
//15//
let str4 =" Hello JavaScript";
let result7 = str4.includes("script");
console.log(result7);//false//
//16//
let str5= "JavaScript";
console.log(str5.startsWith("Java"));//true//
console.log(str5.endsWith("Script"));//true//
//17//
let str6 = "java is easy. java is popular.";
let result8 = str6.replaceAll("java", "python");
console.log(result8); //python is easy. python is popular.//
//18//
let str7 = "html-css-javascript-react";
let result9= str7.split("-");
console.log(result9);//['html', 'css', 'javascript', 'react']
//19//
let names = ["Ravi", "Selvi", "Rishi", "Meena"];
let result10 = names.join(",");
console.log(result10);// Ravi,Selvi,Rishi,Meena//
//20//
let str8 ="Welcome home";
let result11 = str8.slice(5, 15);
console.log(result11);//me home//
//Date Methods//
//21//
let today = new Date();

console.log("Year:", today.getFullYear());//Year: 2026
console.log("Month:", today.getMonth() + 1);//Month: 10
console.log("Date:", today.getDate());//Date: 28
console.log("Day:", today.getDay());//Day: 3

//22//
let months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

let today1 = new Date();

console.log("Current Month:", months[today1.getMonth()]);
//Current Month: October//

//23//
let today3 = new Date();

console.log("Hours:", today3.getHours());//Hours: 14
console.log("Minutes:", today3.getMinutes());//Minutes: 42
console.log("Seconds:", today3.getSeconds()); //Seconds: 26
//24//
let today4 = new Date();

today.setFullYear(2003);
today.setMonth(0);
today.setDate(30);

console.log("Updated Date:", today4); //Updated Date: Wed Oct 28 2026 14:44:29 GMT+0530 (India Standard Time)
console.log("Year:", today4.getFullYear());//Year: 2026
console.log("Month:", today4.getMonth() + 1);//Month: 10
console.log("Date:", today4.getDate());//Date: 28
//Asynchronous Javascript//
//25//
setTimeout(function() {
    console.log("Welcome to JavaScript");
}, 3000);//Welcome to JavaScript
//26//
let newInt = setInterval(()=>{
    console.log("Learning JavaScript");
}, 2000);//Learning JavaScript//
//27//
setTimeout(()=>{
    clearInterval(newInt)
},8000);
//28//
function one() {
    console.log("One");
}

function two() {
    console.log("Two");
}

function three() {
    console.log("Three");
}

one();
setTimeout(two, 0);
three();//one three two//
//promises and APIFetching
//29//
let login = new Promise(function(resolve, reject) {
    resolve("Login successful");
});

login.then(function(result) {
    console.log(result);
});// login successful
//30//
let login1 = new Promise(function(resolve, reject){
    reject("Invalid password");
});

login1.catch(function(ans) {
    console.log(ans);
});//invalid password
//31//
let result12 = new Promise(function(resolve, reject) {
    resolve("Success");
});

result12
    .then(function(message) {
        console.log(message);
    })
    .finally(function() {
        console.log("Process completed");
    });//Success Process completed//
//32//
fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        data.forEach(function(product) {
            console.log(product.title);
        });
    })
    .catch(function(error) {
        console.log("Error:", error);
    });
    //33//
    fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        data.forEach(function(product) {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
            console.log("-------------------");
        });
    })
    .catch(function(error) {
        console.log("Error:", error);
    });
    //34//
    fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.warn("API Error:", error.message);
    });
    //35//
    fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.warn("API Error:", error.message);
    })
    .finally(function() {
        console.log("API call completed");
    });
    //Real- Time Mini Tasks
    //36//
    let employees2 = [
    { name: "Ravi", salary: 250000 },
    { name: "Priya", salary: 350000 },
    { name: "Rishi", salary: 200000 },
    { name: "Selvi", salary: 400000 }
];

let result13 = employees2.filter(function(emp) {
    return emp.salary < 300000;
});

result13.forEach(function(emp) {
    console.log("Name:", emp.name);
    console.log("Salary:", emp.salary);
});
//Name: Ravi
// Salary: 250000
//Name: Rishi
//Salary: 200000
//37//
fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let products = data.map(function(item) {
            return {
                title: item.title,
                price: item.price
            };
        });

        console.log(products);
    })
    .catch(function(error) {
        console.warn("Error:", error.message);
    });
    //38//
    fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let result = data.filter(function(item) {
            return item.category === "jewelery";
        });

        console.log(result);
    })
    .catch(function(error) {
        console.warn("Error:", error.message);
    });
    //39//

let numbers5 = [10, 20, 30, 40, 50];

// map() 
let mapped = numbers5.map(function(num) {
    return num * 2;
});
console.log("Map:", mapped);

// filter() 
let filtered = numbers5.filter(function(num) {
    return num > 20;
});
console.log("Filter:", filtered);

// reduce() 
let total5 = numbers5.reduce(function(sum, num) {
    return sum + num;
}, 0);
console.log("Reduce:", total5);

// some() 
let checkSome = numbers5.some(function(num) {
    return num > 40;
});
console.log("Some:", checkSome);

// every() 
let checkEvery = numbers5.every(function(num) {
    return num > 5;
});
console.log("Every:", checkEvery);
//Map: (5) [20, 40, 60, 80, 100]
//Filter: (3) [30, 40, 50]
//Reduce: 150
//Some: true
//Every: true
//40//
fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        data.forEach(function(item) {
            console.log("Title:", item.title);
            console.log("Price:", item.price);
            console.log("Category:", item.category);
            console.log("----------------------");
        });
    })
    .catch(function(error) {
        console.warn("Error:", error.message);
    })
    .finally(function() {
        console.log("Product listing completed");
    });
