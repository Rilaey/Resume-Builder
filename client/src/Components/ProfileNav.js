import React from "react";
import ProfilePictureTest from "../images/profile-pic.jpeg";

export default function ProfileNav() {
  return (
    <div className="flex flex-col justify-start items-center m-3 h-screen" style={{ borderRight: "2px solid gray"}}>
      <img
        src={ProfilePictureTest}
        alt="profile"
        className="w-1/2 m-1"
        style={{ borderRadius: "50%", height: "23vh" }}
      />
      <button className="btn btn-ghost"><a className="m-1" href="/profileDashboard/:id">Dashboard</a></button>
      <button className="btn btn-ghost"><a className="m-1" href="/profileSettings/:id">Settings</a></button>
      <button className="btn btn-ghost"><a className="m-1" href="/profileResumes/:id">Resumes</a></button>
    </div>
  );
}
