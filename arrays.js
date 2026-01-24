let students = [
  { name: "Ali", age: 20, city: "Lahore" },
  { name: "Sara", age: 22, city: "Karachi" },
  { name: "Ahmed", age: 19, city: "Islamabad" }
];
console.log(students);

for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}
students.forEach(student => {
  console.log(student.city);
});

// new opject add krna
students.push({
  name: "Ayesha",
  age: 21,
  city: "Multan"
});
console.log(students);
// remove last object
students.pop();
console.log(students);

// remove first object
students.shift();
console.log(students);
// add object at first position
students.unshift({
  name: "Zain",
  age: 23,
  city: "Peshawar"
});

console.log(students);
// object update krna
students[1].age = 24;
console.log(students);