import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [mName, setMname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/v1/register", {
      method: "POST",
      body: JSON.stringify({
        fName,
        mName,
        lName,
        email,
        gender,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    console.log(response);
    if (response.ok) {
      navigate("/");
    }
  };
  return (
    <div>
      <nav className="nav">
        <Link to="/">
          <h3>Booking.com</h3>
        </Link>
      </nav>
      <form className="registerForm" onSubmit={handleRegister}>
        <h5>REGISTER</h5>
        <label>Names</label>
        <div className="names">
          <input
            className="inputs"
            type="text"
            placeholder="First name"
            value={fName}
            onChange={(e) => setFname(e.target.value)}
          />
          <input
            className="inputs"
            type="text"
            placeholder="Middle name"
            value={mName}
            onChange={(e) => setMname(e.target.value)}
          />
          <input
            className="inputs"
            type="text"
            placeholder="Last name"
            value={lName}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <label>Email</label>
        <input
          className="inputs"
          type="text"
          required
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Gender</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option
            value=""
            // value={gender}
            // onChange={e => setGender(e.target.value)}
          >
            Select a gender
          </option>
          <option
            value="Male"
            // value={gender}
            // onChange={e => setGender(e.target.value)}
          >
            Male
          </option>
          <option
            value="Female"
            // value={gender}
            // onChange={e => setGender(e.target.value)}
          >
            Female
          </option>
        </select>

        <label>Password</label>
        <input
          className="inputs"
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Confirm Password</label>
        <input
          className="inputs"
          type="password"
          required
          placeholder="Confirm password"
          value={conPassword}
          onChange={(e) => setConPassword(e.target.value)}
        />

        <button className="registerButton" type="submit">
          Register
        </button>
        <p className="foot">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
