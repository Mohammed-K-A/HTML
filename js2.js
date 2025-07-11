// let name="John";
// let age=25;
// console.log(`My name is ${name} and I am ${age} years old.`);





// <<<<<<<<<<<<  condition statements  >>>>>>>>>>>>

// let age=20;
// if(age<18){
//     console.log("You are minor");
// } else if(age>=18 && age<60){
//     console.log("You are an adult");
// } else{
//     console.log("You are a senior citizen");
// }



// <<<<<<<<<<<<<<<<<<<<   Qns    >>>>>>>>>>>>>>>>>>>>>>>>>


// Write a pgm that checks if a number is +ve,-ve,or zero

// let num=7;
// if(num<0){
//     console.log(`The number ${num} is negative.`);
// } else if(num>0){
//     console.log(`The number ${num} is positive.`);
// } else{
//     console.log("The number is zero.")
// }



// <<<<<<<<<<<  Switch   >>>>>>>>>

// let day=3;
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     default:
//         console.log("Invalid day");
// }



// Check if input character is vowel or not

// let vow= "D";
// switch(vow){
//     case "A":
//     case "a":
//     case "E":
//     case "e":
//     case "I":
//     case "i":
//     case "O":
//     case "o":
//     case "U":
//     case "u":
//         console.log("is a vowel.");
//         break;
//     default:
//         console.log("is not a vowel.");
// }




// Create a switch statement to display the grade description based on a letter grade(A,B,C,D,F).

let mark=0;
switch(true){
    case mark < 0 || mark > 100:
        console.log("Enter a valid mark.");
        break;
    case mark<=20:
        console.log(`${mark} is F grade`);
        break;
    case mark<=40:
        console.log(`${mark} is D grade`);
        break;
    case mark<=60:
        console.log(`${mark} is C grade`);
        break;
    case mark<=80:
        console.log(`${mark} is B grade`);
        break;
    case mark<=100:
        console.log(`${mark} is A grade`);
        break;
}