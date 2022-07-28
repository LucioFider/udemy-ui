import "./App.css";
import Courses from "./components/Courses";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Courses />
    </div>
  );
}

export default App;
