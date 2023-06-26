import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpResumePic from "../images/sign-up-resume.jpeg";

export default function SignUp() {
  const [formState, setFormState] = useState({
    userFirstName: "",
    userLastName: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/api/users/createAccount`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userFirstName: formState.userFirstName,
        userLastName: formState.userLastName,
        userEmail: formState.userEmail,
        userPassword: formState.userPassword
      })
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        navigate(`/profileDashboard/${data._id}`);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center m-5">
      <div>
        <img src={SignUpResumePic} alt="resume" className="h-72 rounded-3xl" />
      </div>
      <div>
        <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
          <div className="flex">
            <input
              type="text"
              placeholder="First Name"
              name= "userFirstName"
              value={formState.userFirstName}
              onChange={handleChange}
              className="input input-bordered input-primary w-full max-w-xs  m-5 "
            />
            <input
              type="text"
              placeholder="Last Name"
              name= "userLastName"
              value={formState.userLastName}
              onChange={handleChange}
              className="input input-bordered input-primary w-full max-w-xs m-5 "
            />
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Email"
              name= "userEmail"
              value={formState.userEmail}
              onChange={handleChange}
              className="input input-bordered input-primary w-full max-w-xs  m-5 "
            />
            <input
              type="password"
              placeholder="Password"
              name= "userPassword"
              value={formState.userPassword}
              onChange={handleChange}
              className="input input-bordered input-primary w-full max-w-xs m-5 "
            />
          </div>
          <div>
            <p>
              Already have an account? Click{" "}
              <a href="/signIn" className="underline">
                Here
              </a>{" "}
            </p>
          </div>
          <div>
            <button type="submit" className="btn btn-success m-5">
              {" "}
              Sign Up{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
