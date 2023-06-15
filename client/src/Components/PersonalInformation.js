import React, { useContext } from "react";
import { MyDataContext } from "../Pages/Home";

export default function PersonalInformation() {
  const data = useContext(MyDataContext);

  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    linkedIn,
    gitHub,
    portfolio
  } = data;

  return (
    <div className="flex flex-wrap flex-col justify-center items-center mt-5">
      <div>
        <h2 className="text-2xl m-5">Personal Information</h2>
      </div>
      <div className="flex flex-col flex-wrap justify-center items-center align-center m-5">
        <div className="flex flex-row flex-wrap justify-center items-center align-center">
          <input
            type="text"
            name="firstName"
            value={firstName}
            placeholder="First Name"
            className="input input-bordered input-primary max-w-xs m-3"
          />
          <input
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Last Name"
            className="input input-bordered input-primary max-w-xs m-3"
          />
          <input
            type="number"
            name="phoneNumber"
            value={phoneNumber}
            placeholder="Phone Number"
            className="input input-bordered input-primary max-w-xs m-3"
          />
        </div>
        <div className="flex flex-wrap flex-row justify-center items-center align-center">
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            className="input input-bordered input-primary max-w-xs m-3"
          />
          <input
            type="text"
            name="linkedIn"
            value={linkedIn}
            placeholder="LinkedIn"
            className="input input-bordered input-primary max-w-xs m-3"
          />
          <input
            type="text"
            name="gitHub"
            value={gitHub}
            placeholder="Github"
            className="input input-bordered input-primary max-w-xs m-3"
          />
          <input
            type="text"
            name="portfolio"
            value={portfolio}
            placeholder="Portfolio"
            className="input input-bordered input-primary max-w-xs m-3"
          />
        </div>
      </div>
    </div>
  );
}