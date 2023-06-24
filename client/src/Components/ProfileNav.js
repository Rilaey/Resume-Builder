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
      <a className="m-1">Home</a>
      <a className="m-1">Settings</a>
      <a className="m-1">Log Out</a>
    </div>
  );
}
