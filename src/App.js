import Navbar from "./components/Navbar/Navbar.jsx";
import Intro from "./components/Intro/Intro.jsx";
import Services from "./components/Services/Services.jsx";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
    </div>
  );
}

export default App;
