import "./App.css";
import About from "./components/about/About";
import Project from "./components/project/Project";
import WelcomeMe from "./components/welcome/WelcomeMe";
function App() {
  return (
    <div className="App">
      <WelcomeMe />
      <About />
      <Project />
    </div>
  );
}

export default App;
