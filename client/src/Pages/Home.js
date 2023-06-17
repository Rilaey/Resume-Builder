import React, { useState, createContext, useEffect } from "react";
import PersonalInformation from "../Components/PersonalInformation";
import Summary from "../Components/Summary";
import ProjectInformation from "../Components/ProjectInformation";
import ExperienceInformation from "../Components/ExperienceInformation";
import EducationInformation from "../Components/EducationInformation";
import html2pdf from "html2pdf.js";
import { generateTemplateHtml } from "../Utils/generateTemplateHtml";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateHtml = generateTemplateHtml(formState);

    // Continue with the PDF generation using the template
    const opt = {
      margin: 0.5,
      filename: "output.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
    };

    await html2pdf().set(opt).from(templateHtml).save();

    setFormState({
      firstName: "",
      lastName: "",
      personalCity: "",
      personalState: "",
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
      <form
        className="flex flex-col justify-center m-10"
        onSubmit={handleSubmit}
      >
        <PersonalInformation setFormState={setFormState} />
        <Summary setFormState={setFormState} />
        <ProjectInformation setFormState={setFormState} />
        <ExperienceInformation setFormState={setFormState} />
        <EducationInformation setFormState={setFormState} />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </MyDataContext.Provider>
  );
}
