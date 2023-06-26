import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import ProfileDashboard from "./Pages/ProfileDashboard";
import ProfileSettings from "./Pages/ProfileSettings";
import ProfileResumes from "./Pages/ProfileResumes";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/profileDashboard/:id" element={<ProfileDashboard />} />
        <Route path="/profileSettings/:id" element={<ProfileSettings />} />
        <Route path="/profileResumes/:id" element={<ProfileResumes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
