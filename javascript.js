// javascript basics
// 1.let,var,const
// 2.datatypes
// 3.string
// 4.array
// Objects




// var largeNumbers = [1, 10, 3, 7, 99, 4, 1000];

// function findLargest(largeNumbers) {
//     // Use Math.max with the spread operator to find the largest number
//     var largest = Math.max(...largeNumbers);
//     return largest;
// }

// // Example usage:
// var largestNumber = findLargest(largeNumbers);
// console.log(largestNumber); // Output: 1000

// var largeNumbers = [1, 10, 3, 7, 99, 4]

// function findLargest(largeNumbers) {
//     var largest = largeNumbers[0]; // Start with the first element as the largest

//     for (var i = 1; i < largeNumbers.length; i++) { // Start loop from the second element
//         if (largeNumbers[i] > largest) { // Compare each element with the current largest
//             largest = largeNumbers[i];
//         }
//     }

//     return largest;
// }

// // Example usage:
// var largestNumber = findLargest(largeNumbers);
// console.log(largestNumber);

// var largest = 40;
// function handleClick(largest) {
//     var largest = "natarajan";
//     console.log("name", largest)
//     var a = prompt("enter a value")
//     var b = prompt("enter b value")
//     console.log(a + b);
//     alert("your data is entered")
// }

// let count = 1;

// function clicks() {
//     count += 1; // Increment the count
//     console.log("count", count); // Log the updated count)

// }


// let intervalId; // Variable to hold the interval ID

// function startDisplayingName() {
//     // Check if an interval is already running
//     if (!intervalId) {
//         intervalId = setInterval(() => {
//             const name = "John Doe"; // Name or message to display
//             document.getElementById('nameDisplay').innerText = name;
//             console.log(name); // Optionally log the name to the console
//         }, 1000); // Update every 2000 milliseconds (2 seconds)
//     }
// }

// function stopDisplayingName() {
//     // Clear the interval if it exists
//     if (intervalId) {
//         clearInterval(intervalId);
//         intervalId = null; // Reset intervalId
//         document.getElementById('nameDisplay').innerText = ''; // Clear the display
//     }
// }

// // var name="natarajan";
// // // var name ="naveen";
// // console.log("name",name);


// function example() {
//     let name = "natarajan";
//     console.log(name); // Output: natarajan

//     if (true) {
//         let name = "naveen";
//         console.log(name); // Output: naveen (different scope)
//     }

//     console.log(name); // Output: natarajan (outer scope)
// }

// example();

// const greeting = "Hello, World!";
// console.log(greeting); // Output: Hello, World!


// function example() {
//     if (true) {
//         const blockScoped = "I am inside the block";
//         console.log(blockScoped); // Output: I am inside the block
//     }

//     // Trying to access blockScoped outside the block will cause an error
//     // console.log(blockScoped); // Uncaught ReferenceError: blockScoped is not defined
// }

// example();




//array map
// let newArray = [
//  school:{
//         name: "natarajan",
//         lastname: "ravisankar",
//         mail: "123@gmail.com",

//     },
//     college:{
//         name: "natarajan",
//         lastname: "ravisankar",
//         mail: "123@gmail.com",

//     },
//     address:{
//         name: "naveen",
//         lastname: "ravisankar",
//         mail: "123@gmail.com",

//     }
// ]

// let arrayObject=newArray.map(item=>{
//     item.name
// });

// const arrayObjects = newArray.map(item => item.name,item.mail);
// const arrayObjects = newArray.map(item => ({
//     name: item.name,
//     mail: item.mail
// }));
// console.log("arrayobjects", arrayObjects)


// let numbers=[1,2,3,4,5]
// let filteredArray=numbers.filter(item=>item>2)
// console.log("filtered array",filteredArray)

// //find array
// const team = [
//     { name: "Bill", age: 10 },
//     { name: "Linus", age: 15 },
    
   
//   ];
//   let adultMember = team.find(({ age }) => age = 10);
//   console.log(adultMember);



//for each
let each=[1,2,3,4,5]
let eachValue=each.forEach(item=>item+10)
console.log("each",eachValue)

// with arrow function and callback

// const students = [1, 2, 3, 4, 5, 6];

// // Use map to create a new array with each element multiplied by 10
// const output = students.map(element => element * 10);

// console.log("output", output);


// function func() {
//     const items = [12, 24, 36];
//     const copy = [];
//     items.forEach(function (item) {
//         copy.push(item + 2);
//     });
//     console.log(copy);
// }
// func();



  

// JavaScript code in app.js

// const apiUrl = 'https://63a1fc7f2473944b007080e1.mockapi.io/users';
// const 
const apiUrl ="https://62c87e238c90491c2cb6ac0f.mockapi.io/students"

// Create User
function createUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerHTML = `<p>User Created: ${JSON.stringify(data)}</p>`;
        console.log("data",data)
    })
    .catch(error => console.error('Error:', error));
}

// Read Users
function getUsers() {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        let output = '<h3>Users</h3>';
        data.forEach(user => {
            output += `
                <p>ID: ${user.id}</p>
                <p>Name: ${user.name}</p>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                <hr/>
            `;
        });
        document.getElementById('response').innerHTML = output;
    })
    .catch(error => console.error('Error:', error));
}

// Update User (example: updates user with ID 1)
function updateUser() {
    const id = prompt("Enter User ID to update:");
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerHTML = `<p>User Updated: ${JSON.stringify(data)}</p>`;
    })
    .catch(error => console.error('Error:', error));
}

// Delete User (example: deletes user with ID 1)
function deleteUser() {
    const id = prompt("Enter User ID to delete:");

    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerHTML = `<p>User Deleted: ${JSON.stringify(data)}</p>`;
    })
    .catch(error => console.error('Error:', error));
}


// let i=[1,2,3,4,5]
// for(i=0;i>i.length;i++){
//     console.log("i",i)

// }

let i = [1, 2, 3, 4, 5];
console.log("length",i.length)
for (let index = 0; index < i.length; index++) {
    console.log("i", i[index]);
}
var resume={
    basicInformation:{
      Name:"Natarajan",
      lastname:"R",
      mailid:"naveenelamathi2018@gmail.com",
      no:8531019925,
      nation:"INDIAN",
      state:"Tamilnadu",
      address:"110 mariyamman kovil st,Tirukoilur",
      dt:"Villupuram",
      pincode:605701,
  },
  workAndExperience:"I am worked in the banking sector for last 3years",
  education:[
      {
          school:"vidhya mandir hr sec school,udhangarai",
          "year of 10th pass":"2008",
          "year of 12th pass" :"2010",
      },
      {
          college:"mailam engineering college,Mailam",
          degree:"bachelor of cse",
          passedout:2016,
      },
  
  ],
  skills:[
      "1)reading books",
      "2)working with computer basics",
      "3)basics about sql and java",
  ],
  languagesKnown:["English and Tamil"],
  intersets:[
      "1)cricket",
      "2)baseketball",
      "3)chess",
      "4)football",
  ],
  
  }
  var resumejson=JSON.stringify(resume);
  console.log(resumejson);
  var resumeobj=JSON.parse(resumejson);
  console.log(resumeobj);

  const fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.unshift("Lemon", "Pineapple");
document.getElementById("demo").innerHTML = fruits;

const newFruits=["Banana", "Orange", "Apple", "Mango"]
newFruits.shift("Banana", "Orange");
document.getElementById("demos").innerHTML = newFruits;