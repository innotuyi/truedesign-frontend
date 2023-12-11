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
import ProductScreen from './ProductScreen'
import ProductList from './ProductList'
import MessagePage from './MessagePage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import PaymentProcess from './PaymentProcess'
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
          <Route path="AddProduct" element ={<ProductScreen/>} />
          <Route path="productList" element ={<ProductList/>} />
          <Route path="message" element ={<MessagePage/>} />
          <Route path="login" element ={<LoginPage/>} />
          <Route path="register" element ={<RegisterPage/>} />
          <Route path="payment" element ={<PaymentProcess/>} />






          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
