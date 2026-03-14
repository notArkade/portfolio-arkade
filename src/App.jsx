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
import OpenToWork from "./sections/OpenToWork";

import { Routes, Route } from "react-router-dom";

import ScrollRestoration from "./utils/ScrollRestoration";
import CameraHUD from "./components/CameraHUD";

const Portfolio = () => {
  return (
    <>
      {/* <div className="tv-frame" /> */}
      <div className="glare" />
            <CameraHUD />

      <div className="interlaced" />
      <main id="scroll-container" className="scroll-hide cursor-default">
        <CustomCursor />
        <Header />
        <Home />
        <About />
        <Status />
        <Projects />
        <What />
        {/* <Contact /> */}
        <OpenToWork />
        <Footer />
      </main>
    </>
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
