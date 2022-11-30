import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes} from "react-router-dom";
import React,{createContext ,useState} from "react";
import Navbar from "./New folder/Navbar";
import Home from "./New folder/Home";
import About from "./New folder/About";
import Contact from "./New folder/Contact";
import Context from "./New folder/Context";
import Context2 from "./New folder/Context2";
import Memo from "./New folder/Memo";

export const UserContext = React.createContext();

const App = () => {
  // const [data,setData5] = useState(0);
  return (
    <div>
      <UserContext.Provider value={"Your Profile has been Updated"} >
        <Context />
      </UserContext.Provider>
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
          <Route
            path="/memo"
            element={<Memo />}
          />
          {/* <UserContext.Provider value={"Updated Profile"} >
          
          <Route
            path="/context"
            element={<Context />}
          />
          <Route
            path="/context2"
            element={<Context2 />}
          />
          </UserContext.Provider> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
