import React from "react";
import Desktop2 from "./pages/Desktop2";
import Desktop1 from "./pages/Desktop1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/desktop1" element={<Desktop1 />} />
        <Route path="/desktop2" element={<Desktop2 />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
