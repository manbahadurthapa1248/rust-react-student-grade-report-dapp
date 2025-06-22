import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import * as backend from "../../declarations/icp_student_records_backend";

function App() {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState(["", "", "", "", ""]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const data = await backend.get_students();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleAddStudent = async () => {
    const numericMarks = marks.map((m) => parseInt(m));
    if (numericMarks.some(isNaN) || !name) {
      alert("Please enter a name and all 5 valid marks.");
      return;
    }

    try {
      await backend.add_student(name, numericMarks);
      setName("");
      setMarks(["", "", "", "", ""]);
      fetchStudents();
    } catch (err) {
      console.error("Error adding student:", err);
      alert("Error adding student.");
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Student Report Card", 20, 10);
    let y = 20;
    students.forEach((student, index) => {
      doc.text(
        `${index + 1}. Name: ${student.name}, Total: ${student.total_marks}, Avg: ${student.average.toFixed(
          2
        )}, Grade: ${student.grade}`,
        10,
        y
      );
      y += 10;
    });
    doc.save("report_card.pdf");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Student Record Entry</h2>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      {["English", "Math", "Science", "History", "Computer"].map((subject, i) => (
        <input
          key={i}
          type="number"
          placeholder={subject}
          value={marks[i]}
          onChange={(e) => {
            const updated = [...marks];
            updated[i] = e.target.value;
            setMarks(updated);
          }}
          style={{ marginRight: "10px", width: "100px" }}
        />
      ))}
      <button onClick={handleAddStudent}>Add Student</button>

      <h2 style={{ marginTop: "40px" }}>Student Report Card</h2>
      {students.length === 0 ? (
        <p>No student data found.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Total Marks</th>
              <th>Average</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, idx) => (
              <tr key={idx}>
                <td>{s.name}</td>
                <td>{s.total_marks}</td>
                <td>{s.average.toFixed(2)}</td>
                <td>{s.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button onClick={generatePDF} style={{ marginTop: "20px" }}>
        Download Report PDF
      </button>
    </div>
  );
}

export default App;
