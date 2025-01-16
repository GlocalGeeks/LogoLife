import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LeadingProgram from "./pages/LeadingProgram";

export const App = () => {
  return (
    <Router>
      <Routes>
        {/* Use JSX syntax for the `element` prop */}
        <Route path="/" element={<Home />} />
        <Route path="/tech-college-admissions-counseling" element={<Home />} />
        <Route path="/tech-college-admissions-counseling-2" element={<LeadingProgram />} />
      </Routes>
    </Router>
  );
};

export default App;
