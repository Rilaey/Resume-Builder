import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
