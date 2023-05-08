import Navbar from "./components/Navbar/Navbar.jsx";
import Intro from "./components/Intro/Intro.jsx";
import Services from "./components/Services/Services.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Works from "./components/Works/Works.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";

import "./App.css"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
    </div>
  );
}

export default App;
