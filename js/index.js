// Iteration 1: Names and Input
console.loh ("im ready")

let hacker1 = "Ashtyn";
console.log("The drivers name is " + hacker1 + ".");

let hacker2 = "Sam";
console.log (`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals

if (hacker1.length>hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if(hacker2.length>hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, {hacker2.length} characters!`)
  }

// Iteration 3: Loops

//3.1
console.log(hacker1.split("").join(" ")
.toUpperCase())

//3.2
function reverseString(str) {
    return str.split("").reverse().join("").toLowerCase();
}
reverseString(hacker2);

//3.3
if (hacker1<hacker2) {
  console.log(`The drivers name goes first.`)
} else if (hacker1>hacker2) {
  console.log (`Yo, the navigator goes first definitely.`)
} else {
  console.log (`What?! You both have the same name?`)
}

// Bonus Time

//bonus 1
let para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

console.log(para.split(' ').length);
console.log(para.split('et').length -1);

//bonus 2

