const students = [
  {
    firstName: "James",
    lastName: "Calvin",
    age: 19,
  },

  {
    firstName: "John",
    lastName: "Doe",
    age: 13,
  },

  {
    firstName: "Angelina",
    lastName: "Joe",
    age: 26,
  },

  {
    firstName: "Nicki",
    lastName: "Stephens",
    age: 45,
  },
];

function studentGeneration(students) {
  students.forEach((s) => {
    if (s.age >= 0 && s.age <= 13)
      console.log(`${s.firstName} ${s.lastName} is a Gen Alpha`);
    else if (s.age > 13 && s.age <= 27)
      console.log(`${s.firstName} ${s.lastName} is a Gen Z`);
    else if (s.age > 27 && s.age <= 37)
      console.log(`${s.firstName} ${s.lastName} is a Millenial`);
    else {
      console.log(`that's a boomer`);
    }
  });
}
studentGeneration(students);
