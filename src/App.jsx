import { BrowserRouter } from "react-router-dom";
import Router  from "../src/Router";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return(
    <div>
    <BrowserRouter>
      <NavBar/>
      <Router/>
    </BrowserRouter>
    </div>
  );
};

export default App;

