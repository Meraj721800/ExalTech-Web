import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home Page/Home";
import NaveBar from "./Components/NaveBar/NaveBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <h1>This is app.js Components</h1> */}
      <NaveBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
