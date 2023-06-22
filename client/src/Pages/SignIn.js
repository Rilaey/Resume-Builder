import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginFormPicture from "../images/login-form-pic.jpeg";

export default function SignIn() {
  const [formState, setFormState] = useState({
    userEmail: "",
    userPassword: ""
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // finish this function
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/users/loginUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userEmail: formState.userEmail,
        userPassword: formState.userPassword
      })
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        navigate(`/profile/${data._id}`);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <div className="flex items-center justify-center flex-wrap m-10">
      <div>
        <img
          src={LoginFormPicture}
          alt="shaking hands"
          style={{ borderRadius: "75px" }}
          className="mr-5"
        />
      </div>
      <div>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type="email"
              placeholder="Email"
              name="userEmail"
              value={formState.userEmail}
              onChange={handleChange}
              className="input input-bordered input-primary w-full max-w-xs m-5"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="userPassword"
              value={formState.userPassword}
              onChange={handleChange}
              className="input input-bordered input-primary w-full max-w-xs m-5"
            />
          </div>
          <div>
            <button className="btn btn-success m-5">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}
