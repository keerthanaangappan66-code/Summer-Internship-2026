//[STUDENT CARD]

//App.css
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f3f4f6;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.card {
  width: 320px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px gray;
  text-align: center;
}

button {
  padding: 10px 20px;
  border: none;
  background: royalblue;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

//app.jsx
import { useState } from "react";
import "./App.css";
import StudentCard from "./StudentCard";

function App() {
  const [count, setCount] = useState(3);

  const students = [
    {
      name: "Keerthana",
      age: 20,
      city: "Coimbatore",
      roll: "2422j0871",
      department: "BCA",
      marks: 95,
      course: "React",
    },
    {
      name: "Aakash",
      age: 21,
      city: "Coimbatore",
      roll: "2422j0872",
      department: "B.Tech",
      marks: 82,
      course: "React",
    },
    {
      name: "Riya",
      age: 20,
      city: "Banganlur",
      roll: "2422j0873",
      department: "IT",
      marks: 80,
      course: "Java",
    },
    {
      name: "Sandhiya",
      age: 20,
      city: "Banganlur",
      roll: "2422j0874",
      department: "IT",
      marks: 80,
      course: "Java",
    },
    {
      name: "Aryan",
      age: 20,
      city: "Banganlur",
      roll: "2422j0875",
      department: "IT",
      marks: 80,
      course: "Java",
    },
    {
      name: "Zain",
      age: 20,
      city: "Banganlur",
      roll: "2422j0876",
      department: "IT",
      marks: 80,
      course: "Java",
    },
  ];

 return (
  <div className="container">
    <h2>Student Count: {count}</h2>

    <button onClick={() => setCount(count + 1)}>
      Increase Student Count
    </button>

    <div className="cards">
      {students
        .filter((student) => student.marks > 75)
        .map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            age={student.age}
            city={student.city}
            roll={student.roll}
            department={student.department}
            marks={student.marks}
            course={student.course}
          />
        ))}
    </div>
  </div>
);
}
export default App;

//Student-Card
function StudentCard(props) {
  return (
    <div className="card">
      <h2> Student Card</h2>

      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
      <p>Roll No: {props.roll}</p>
      <p>Department: {props.department}</p>
      <p>Marks: {props.marks}</p>

      {/* Hide course if empty */}
      {props.course && <p>Course: {props.course}</p>}

      {/* Show Topper if marks > 90 */}
      {props.marks > 90 && <h3 style={{ color: "green" }}> Topper</h3>}

      <button>View Profile</button>
    </div>
  );
}

export default StudentCard;
