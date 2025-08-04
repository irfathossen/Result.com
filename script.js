// Dummy data
const data = {
  name: "Rahim Uddin",
  fatherName: "Karim Uddin",
  roll: "101",
  class: "7th",
  gender: "Male",
  dob: "2008-12-07",
  marks: {
    Math: 85,
    English: 78,
    Science: 90,
    ICT: 88
  }
};

// Inject data into HTML
document.getElementById("student-name").textContent = data.name;
document.getElementById("father-name").textContent = data.fatherName;
document.getElementById("roll-number").textContent = data.roll;
document.getElementById("class").textContent = data.class;
document.getElementById("gender").textContent = data.gender;
document.getElementById("dob").textContent = new Date(data.dob).toLocaleDateString();

const marksTable = document.getElementById("marks-table");
for (let subject in data.marks) {
  let row = document.createElement("tr");
  row.innerHTML = `<td>${subject}</td><td>${data.marks[subject]}</td>`;
  marksTable.appendChild(row);
}