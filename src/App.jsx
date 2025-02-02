import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={(event)=> {
        event.preventDefault()

      }}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input value={name} onChange={event => {setName(event.target.value)}} name="fullName" type="text" placeholder="Full Name" />
          </label>

          <label>
            Profile Image
            <input value={image} onChange={event => {setImage(event.target.value)}} name="image" type="url" placeholder="Profile Image" />
          </label>

          <label>
            Phone
            <input value={phone} onChange={event => {setPhone(event.target.value)}} name="phone" type="tel" placeholder="Phone" />
          </label>

          <label>
            Email
            <input value={email} onChange={event => {setEmail(event.target.value)}} name="email" type="email" placeholder="Email" />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program">
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
      {/* FORM END */}


      {/* TABLE/LIST HEADER */}
      <TableHeader />


      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
