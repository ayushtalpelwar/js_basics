//console.log("I like pizza");

//window.alert("jhsbdufey");
//hello comment

// let age=21;
// let firstname="Ayush";
// let enroll=true;
// console.log("you are",age,"years old");
// console.log(firstname);
// document.getElementById("p1").innerHTML = "Hello " + firstname;
// document.getElementById("p2").innerHTML = "You are "+age+"old";


// let name=window.prompt("Whats your name?");
// console.log(name);


// let username;
// document.getElementById("mybutton").onclick = function () {
//     username = document.getElementById("myname").value;
//     console.log(username);
//     document.getElementById("mylabel").innerHTML = "Hello" + username;
// }


// let age=window.prompt("How old are you?");
// age=Number(age); If we are getting data from prompt it will be always in the form of string ...convert it accordingly
// age+=1;
// console.log(age);

//const pi=3.14159;

// Math
// let x = 3.14;
// x = math.round(x);
// x = math.floor(x);
// x = math.pow(x, 3);
// x = math.sqrt(x);
// let max = math.max(x, y, z);
// x = math.PI;

// let a, b, c;
// a = window.prompt("Enter side A: ");
// b = window.prompt("Enter side B: ");
// a = Number(a);
// b = Number(b);
// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log(c);

// document.getElementById("sub").onclick = function () {
//     let a = document.getElementById("sidea").value;
//     let b = document.getElementById("sideb").value;
//     let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//     document.getElementById("c").innerHTML = "side c: " + c;
// }


// let count = 0;
// document.getElementById("in").onclick = function () {
//     count += 1;
//     document.getElementById("countlab").innerHTML = count;
// }
// document.getElementById("reset").onclick = function () {
//     count = 0;
//     document.getElementById("countlab").innerHTML = count;
// }
// document.getElementById("dec").onclick = function () {
//     count -= 1;
//     document.getElementById("countlab").innerHTML = count;
// }

// document.getElementById("mybutton").onclick = function () {
//     // const check = document.getElementById("check")
//     if (document.getElementById("check").checked) {
//         console.log("You are subscribed");
//     }
//     else {
//         console.log("plz subscribe to my channel");
//     }
// }

//template literal (`)
// let username = "ayush";
// let age = 20;
// console.log(`My name is ${username} and i am ${age} years old`);

// let text = `My name is ${username} and i am ${age} years old`;
// document.getElementById("mylabel").innerHTML = text;

// let mynum = 40803;
// mynum = mynum.toLocaleString("hi-IN", { style: "currency", currency: "INR" });
// console.log(mynum);

// document.getElementById("submitbutton").onclick = function () {
//     let temp = 32;
//     if (document.getElementById("c").checked) {
//         temp = document.getElementById("textbox").value;
//         temp = Number(temp);
//         temp = tocelcius(temp);
//         document.getElementById("templabel").innerHTML = temp + "°C";
//     }
//     else if (document.getElementById("f").checked) {
//         temp = document.getElementById("textbox").value;
//         temp = Number(temp);
//         temp = tofarenhite(temp);
//         document.getElementById("templabel").innerHTML = temp + "°F";
//     }
//     else {
//         document.getElementById("templabel").innerHTML = "Select option";
//     }
// }
// function tocelcius(temp) {
//     return temp - 32 * (5 / 9);
// }
// function tofarenhite(temp) {
//     return temp * (9 / 5) + 32;
// }

//alt 0176 for °

// let prices = [5, 1, 40, 20, 84];
// // prices = prices.sort();

// // for (let i of prices) {
// //     console.log(i);
// // }

// max = Math.max(...prices);
// console.log(max);

// const store=new Map([
//     ["tshirt",20],
//     ["pant",30]
// ]);
// console.log(store.get("tshirt"));
// store.forEach((value,key)=>console.log(`${key}: ${value}`));

// const car1={
//     brand:"BMW",
//     model:'M',
//     yearOfManufacture : '2018' ,
//     color :"red",
//     drive: function(){
//         console.log("You are driving");
//     }
// };

// console.log(car1.model);
// console.log(car1.drive);

// class student{
//     constructor(name){
//         this.name=name;
//     }
//     print(){
//         console.log(`Your name ${this.name}`);
//     }
// }
// const student1=new student("Ayush");
// student1.print();

// let dat=new Date();
// dat=dat.toLocaleString();
// console.log(dat);

const mybutton = document.getElementById("mybutton");
const myanimation = document.getElementById("mydiv");

mybutton.addEventListener("click", begin);

function begin() {
    let timerid = 0;
    let x = 0;
    let y = 0;
    timerid = setInterval(frame, 5);

    function frame() {
        if (x == 200 || y == 200) {
            clearInterval(timerid);
        }
        else {
            x += 1;
            y += 1;
            myanimation.style.left = x + "px";
            myanimation.style.top = y + "px";

        }
    }

}
