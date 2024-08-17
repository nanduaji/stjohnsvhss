import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Chatbot from "./components/Chatbot";
import Faculty from "./components/Faculty";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Faculty />
      <Gallery />
      <Chatbot />
    </div>
  );
}

export default App;
