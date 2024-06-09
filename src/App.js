import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Screens/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Screens/Login";
import SignUp from "./Screens/Signup";
import { CartProvider } from "./Components/contextReducer";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/Login" element={<Login />}></Route>
            <Route exact path="/Signup" element={<SignUp />}></Route>
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
