import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    name: "",
    age: "",
    dob: "",
  });

  function changeHandle(e) {
    const { name, value } = e.target; // Destructure name and value from e.target
    setUser({ ...user, [name]: value });
  }
  return (
    <>
      <h1>Dynamic Form </h1>
      <div className="form">
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={user.name}
            name="name"
            id="name"
            onChange={changeHandle}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            value={user.age}
            name="age"
            id="age"
            onChange={changeHandle}
          />
          <label htmlFor="dob">DOB</label>
          <input
            type="datetime"
            value={user.dob}
            name="dob"
            id="dob"
            onChange={changeHandle}
          />
        </form>
      </div>

      <div className="data">
        <h1>User Data</h1>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Age</td>
              <td>DOB</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.dob}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
