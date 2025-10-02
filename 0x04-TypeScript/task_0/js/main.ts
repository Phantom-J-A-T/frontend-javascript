// task_0/js/main.ts

// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two students
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "Lagos",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Abuja",
  };
  
  // Create an array of students
  const studentsList: Student[] = [student1, student2];
  
  // Render table with Vanilla JS
  const table: HTMLTableElement = document.createElement("table");
  const tableHead: HTMLTableSectionElement = table.createTHead();
  const headerRow: HTMLTableRowElement = tableHead.insertRow();
  
  const th1: HTMLTableCellElement = document.createElement("th");
  th1.textContent = "First Name";
  headerRow.appendChild(th1);
  
  const th2: HTMLTableCellElement = document.createElement("th");
  th2.textContent = "Location";
  headerRow.appendChild(th2);
  
  const tableBody: HTMLTableSectionElement = table.createTBody();
  
  // Loop through students and add rows
  studentsList.forEach((student) => {
    const row: HTMLTableRowElement = tableBody.insertRow();
    const firstNameCell: HTMLTableCellElement = row.insertCell();
    const locationCell: HTMLTableCellElement = row.insertCell();
  
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });
  
  // Append table to document body
  document.body.appendChild(table);
  