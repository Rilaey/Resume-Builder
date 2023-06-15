import React, { useState, createContext } from "react";
import PersonalInformation from "../Components/PersonalInformation";
import Summary from "../Components/Summary";
import ProjectInformation from "../Components/ProjectInformation";
import ExperienceInformation from "../Components/ExperienceInformation";
import EducationInformation from "../Components/EducationInformation";

export const MyDataContext = createContext();

export default function Home() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    linkedIn: "",
    gitHub: "",
    portfolio: "",
    frontEndSkills: "",
    backEndSkills: "",
    summary: "",
    title: "",
    gitHubLink: "",
    applicationLink: "",
    frontTools: "",
    backTools: "",
    keyPointOne: "",
    keyPointTwo: "",
    keyPointThree: "",
    school: "",
    schoolCity: "",
    shoolState: "",
    awardReceived: "",
    schoolStartDate: "",
    schoolEndDate: "",
    schoolSummary: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    company: "",
    locationCity: "",
    locationState: "",
    jobSummary: "",
    keyAccomplishmentOne: "",
    keyAccomplishmentTwo: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formState)

    setFormState({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      linkedIn: "",
      gitHub: "",
      portfolio: "",
      frontEndSkills: "",
      backEndSkills: "",
      summary: "",
      title: "",
      gitHubLink: "",
      applicationLink: "",
      frontTools: "",
      backTools: "",
      keyPointOne: "",
      keyPointTwo: "",
      keyPointThree: "",
      school: "",
      schoolCity: "",
      shoolState: "",
      awardReceived: "",
      schoolStartDate: "",
      schoolEndDate: "",
      schoolSummary: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      company: "",
      locationCity: "",
      locationState: "",
      jobSummary: "",
      keyAccomplishmentOne: "",
      keyAccomplishmentTwo: ""
    });
  };

  return (
    <MyDataContext.Provider value={formState}>
      <form className="flex flex-col justify-center m-10" onSubmit={handleSubmit}>
        <PersonalInformation setFormState={setFormState} />
        <Summary setFormState={setFormState} />
        <ProjectInformation setFormState={setFormState} />
        <ExperienceInformation setFormState={setFormState} />
        <EducationInformation setFormState={setFormState} />
        <button type="submit" className="btn btn-success">Success</button>
      </form>
    </MyDataContext.Provider>
  );
}
