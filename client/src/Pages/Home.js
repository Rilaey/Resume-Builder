import React from "react";
import PersonalInformation from "../Components/PersonalInformation";
import Summary from "../Components/Summary";
import ProjectInformation from "../Components/ProjectInformation";
import ExperienceInformation from "../Components/ExperienceInformation";
import EducationInformation from "../Components/EducationInformation";

export default function Home() {
  return (
    <div>
      <PersonalInformation />
      <Summary />
      <ProjectInformation />
      <ExperienceInformation />
      <EducationInformation />
    </div>
  );
}
