import "./App.css";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Status from "./sections/Status";
import CustomCursor from "./sections/CustomCursor";
import What from "./sections/What";
import ProjectPage from "./sections/ProjectPage";

import { Routes, Route } from "react-router-dom";

import ScrollRestoration from "./utils/ScrollRestoration";

const Portfolio = () => {
  return (
    <main id="scroll-container" className="scroll-hide">
      <CustomCursor />
      <Header />
      <Home />
      <Status />
      <About />
      <Projects />
      <What />
      <Contact />
      <Footer />
    </main>
  );
};

function App() {
  return (
    <>
    <ScrollRestoration />
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/projects/:projectId" element={<ProjectPage />} />
    </Routes>
    </>
  );
}

export default App;
