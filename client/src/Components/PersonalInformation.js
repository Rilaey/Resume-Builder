import React, { useContext } from "react";
import { MyDataContext } from "../Pages/Home";

export default function PersonalInformation({  setFormState }) {

  const data = useContext(MyDataContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

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
            value={data.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            className="input input-bordered input-primary max-w-xs m-3"
          />
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
            className="input input-bordered input-primary max-w-xs m-3"
          />
          <input
            type="text"
            name="personalCity"
            value={data.personalCity}
            onChange={handleInputChange}
            placeholder="City"
            className="input input-bordered input-primary max-w-xs m-3"
          />
          <input
            type="text"
            name="personalState"
            value={data.personalState}
            onChange={handleInputChange}
            placeholder="State"
            className="input input-bordered input-primary max-w-xs m-3"
          />
          <input
            type="text"
            name="phoneNumber"
            value={data.phoneNumber}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="input input-bordered input-primary max-w-xs m-3"
          />
        </div>
        <div className="flex flex-wrap flex-row justify-center items-center align-center">
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="input input-bordered input-primary max-w-xs m-3"
          />
          <input
            type="text"
            name="linkedIn"
            value={data.linkedIn}
            onChange={handleInputChange}
            placeholder="LinkedIn"
            className="input input-bordered input-primary max-w-xs m-3"
          />
          <input
            type="text"
            name="gitHub"
            value={data.gitHub}
            onChange={handleInputChange}
            placeholder="Github"
            className="input input-bordered input-primary max-w-xs m-3"
          />
          <input
            type="text"
            name="portfolio"
            value={data.portfolio}
            onChange={handleInputChange}
            placeholder="Portfolio"
            className="input input-bordered input-primary max-w-xs m-3"
          />
        </div>
      </div>
    </div>
  );
}