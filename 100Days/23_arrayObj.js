
const students = [
    { name: 'Amit', marks: 85 },
    { name: 'Neha', marks: 92 },
    { name: 'Raj', marks: 67 },
    { name: 'Priya', marks: 73 },
    { name: 'Rahul', marks: 88 },
];

// Task 1:
// Write a function to find the student with the highest marks.

function findTopStudent(students) {
    return students.reduce((topStudent, currentStudent) =>
      currentStudent.marks > topStudent.marks ? currentStudent : topStudent
    );
  }
  
  console.log(findTopStudent(students));
  


