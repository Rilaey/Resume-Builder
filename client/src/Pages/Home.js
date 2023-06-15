import React from "react";
import PersonalInformation from "../Components/PersonalInformation";
import Summary from "../Components/Summary";
import ProjectInformation from "../Components/ProjectInformation";
import ExperienceInformation from "../Components/ExperienceInformation";
import EducationInformation from "../Components/EducationInformation";

const MyDataContext = React.createContext();

export default function Home() {
  const userInfo = {}

  return (
    <MyDataContext.Provider value={userInfo}>
      <div>
        <PersonalInformation />
        <Summary />
        <ProjectInformation />
        <ExperienceInformation />
        <EducationInformation />
      </div>
    </MyDataContext.Provider>
  );
}
