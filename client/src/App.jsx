import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import SignIn from "./page/SignIn";
import About from "./page/About";
import Project from "./page/Project";
import SignUp from "./page/SignUp";
import Dashboard from "./page/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
