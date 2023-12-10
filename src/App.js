import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Service from './Service'
import About from './About'
import Contact from './Contact'
import Branding from './Branding'
import Designing from './Designing'
import Printing from './Printing'
import Dashboard from './Dashboard'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home />} exact/>
          <Route path="service"  element={<Service />} />
          <Route path="about"  element={<About />} />
          <Route path="contact"  element={<Contact />} />
          <Route path="branding" element ={<Branding/>} />
          <Route path="printing" element ={<Printing/>} />
          <Route path="design" element ={<Designing/>} />
          <Route path="dashboard" element ={<Dashboard/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
