import React, { useState, createContext, useEffect } from "react";
import PersonalInformation from "../Components/PersonalInformation";
import Summary from "../Components/Summary";
import ProjectInformation from "../Components/ProjectInformation";
import ExperienceInformation from "../Components/ExperienceInformation";
import EducationInformation from "../Components/EducationInformation";
import jsPDF from "jspdf";
import axios from "axios";

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

  useEffect(() => {
    // Fetch the HTML template when the component mounts
    fetchTemplate();
  }, []);

  const fetchTemplate = () => {
    axios.get("./template.html").then((response) => {
      // Set the template content in the form state
      setFormState((prevState) => ({
        ...prevState,
        template: response.data,
      }));
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const doc = new jsPDF();

    // Access the template from the form state
    const template = formState.template;

    // Generate the PDF
    doc.fromHTML(template, 15, 15, {
      width: 170,
    });

    doc.save("test123.pdf");

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
