import "./App.css";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Status from "./sections/Status";

function App() {
  return (
    <main className="scroll-hide">
      <Header />
      <Home />
      <Status />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
