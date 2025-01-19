import React from "react";
import {useForm} from "react-hook-form";
import "./Register.css"; // Import the CSS file for styling

const Register = () => {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const onSubmit = async (data) =>{
        // console.log(data)
        const response = await postReg("/auth/register", data);
    }
  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <select id="role" name="role" required>
              <option value="">Select your role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login Here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;

/* Below is the CSS to make the page responsive */
