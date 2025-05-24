// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Kelvin",
  lastName: "Kamau",
  age: 24,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Lucy",
  lastName: "Makini",
  age: 22,
  location: "Mombasa",
};

// Add them to a list
const studentsList: Student[] = [student1, student2];

// Create a table
const table = document.createElement("table");

// Add rows for each student
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

// Append to the document body
document.body.appendChild(table);
