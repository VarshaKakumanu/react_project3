import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes} from "react-router-dom";
import Navbar from "./New folder/Navbar";
import Home from "./New folder/Home";
import About from "./New folder/About";
import Contact from "./New folder/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
