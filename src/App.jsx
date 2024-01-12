
import Router  from "../src/Router";
import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <div className="appContainer">
      <BrowserRouter>
      <Router />
      <NavBar/>
      </BrowserRouter>
    </div>
      
    
  )
}

export default App;

