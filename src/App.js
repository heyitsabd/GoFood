import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Screens/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Screens/Login";

function App() {
  return (
    <Router>
      <din>
        <Routes>
          <Route exact path="/"  element={<Home/>}></Route>
          <Route exact path="/Login"  element={<Login/>}></Route>
        </Routes>
      </din>
    </Router>
  );
}

export default App;
