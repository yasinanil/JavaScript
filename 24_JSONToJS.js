let text = `
{
  "employees": [
    { "firstName": "John", "lastName": "Doe" },
    { "firstName": "Anna", "lastName": "Smith" },
    { "firstName": "Peter", "lastName": "Jones" }
   ]
}`;

let obj = JSON.parse(text);
let secondFirstName = obj.employees[1].firstName;
let secondLastName = obj.employees[1].lastName;

console.log(secondFirstName);
console.log(secondLastName);


const data = `
{
  "name": "Macron",
  "age": 40,
  "address": {
    "streetAddress": "123 Main St",
    "city": "Paris"
  },
  "phoneNumber": [
    { "type": "home", "number": "123456789" },
    { "type": "fax", "number": "987654321" }
  ]
}`;

let obj2 = JSON.parse(data);
console.log(obj2.age);
console.log(obj2.name);
console.log(obj2["name"]);
console.log(obj2["address"].city);
console.log(obj2["address"]["city"]);
console.log(obj2["phoneNumber"][1].number);
console.log(obj2["phoneNumber"][1]["number"]);
