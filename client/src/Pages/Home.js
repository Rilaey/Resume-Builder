import React from "react";
import PersonalInformation from "../Components/PersonalInformation";
import Summary from "../Components/Summary";
import ProjectOneInformation from "../Components/ProjectOneInformation";

export default function Home() {
  return (
    <div>
      <PersonalInformation />
      <Summary />
      <ProjectOneInformation />
    </div>
  );
}
