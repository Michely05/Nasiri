import { BrowserRouter } from "react-router-dom";
import  Router  from "../src/Router";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {

  return (
    <div className="appContainer">
      <Router />
      <NavBar/>
    </div>
  )
  }


export default App;

