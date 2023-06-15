import React from "react";
import PersonalInformation from "../Components/PersonalInformation";
import Summary from "../Components/Summary";
import ProjectInformation from "../Components/ProjectInformation";
import ExperienceInformation from "../Components/ExperienceInformation";

export default function Home() {
  return (
    <div>
      <PersonalInformation />
      <Summary />
      <ProjectInformation />
      <ExperienceInformation />
    </div>
  );
}
