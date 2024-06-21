const student = {
  firstName: "James",
  lastName: "Calvin",
  Age: 19,
};

const student1 = {
  firstName: "John",
  lastName: "Doe",
  Age: 13,
};

const student2 = {
  firstName: "Angelina",
  lastName: "Joe",
  Age: 26,
};

const student3 = {
  firstName: "Nicki",
  lastName: "Stephens",
  Age: 45,
};

function studentGeneration(students) {
  let student = `age`;

  if (student.age > 0 && student.age <= 13)
    console.log(` ${student.firstName} ${student.lastName} is a Gen Alpha`);
  else if (student.age > 13 && student.age <= 27)
    console.log(`${student.firstName} ${student.lastName} is a Gen Z`);
  else if (student.age > 27 && student.age <= 37)
    console.log(`${student.firstName} ${student.lastName} is a Millenial`);
  else {
    console.log(`that's a boomer`);
  }
}
studentGeneration([student, student1, student2, student3]);
