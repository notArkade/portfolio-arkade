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

function App() {
  return (
    <main className="scroll-hide">
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
}

export default App;

// import "./App.css";
// import Footer from "./sections/Footer";
// import Header from "./sections/Header";
// import Projects from "./sections/Projects";
// import About from "./sections/About";
// import Contact from "./sections/Contact";
// import Home from "./sections/Home";
// import Status from "./sections/Status";
// import CustomCursor from "./sections/CustomCursor";

// function App() {
//   return (
//     <main className="scroll-hide relative">
//       <div className="relative z-60">
//         <CustomCursor />
//         <Header />
//       </div>
//       <Home />
//       <Status />

//       {/* Sticky pinned Status */}
//       <div className="h-screen sticky top-0 z-40">
//         <About />
//       </div>

//       {/* Sections that slide over Status */}
//       <div className="relative z-50">
//         <Projects />
//         <Contact />
//         <Footer />
//       </div>
//     </main>
//   );
// }

// export default App;


