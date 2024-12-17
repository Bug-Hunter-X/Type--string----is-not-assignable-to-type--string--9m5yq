function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
//console.log(greeter(user)); //This will cause an error

//Solution 1: Modify the function to accept an array of strings
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(" ");
}
console.log(greeterArray(user));

//Solution 2: Modify the input to provide a single string
let userName = user.join(" ");
console.log(greeter(userName));