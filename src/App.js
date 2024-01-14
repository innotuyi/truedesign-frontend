import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';


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
import UpdateProductScreen from './UpdateProductScreen'
import Poster from './Poster'
import Sticker from './Sticker'
import Bronchures from './Bronchures'
import Flyer from './Flyer'
import LetterHead from './LetterHead'
import Magazine from './Magazine'
import BusinessCard from './BusinessCard'
import Calendar from './Calendar'
import Banner from './Banner'
import BackLit from './BackLit'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home />} exact/>
          <Route path="service"  element={<Service />} />
          <Route path="poster"  element={<Poster />} />
          <Route path="sticker"  element={<Sticker />} />
          <Route path="bronchures"  element={<Bronchures />} />
          <Route path="flyer"  element={<Flyer />} />
          <Route path="letterheads"  element={<LetterHead />} />
          <Route path="magazine"  element={<Magazine />} />
          <Route path="business"  element={<BusinessCard />} />
          <Route path="calendar"  element={<Calendar />} />
          <Route path="banner"  element={<Banner />} />
          <Route path="backlit"  element={<BackLit />} />







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
          <Route path="update/:id" element ={<UpdateProductScreen/>} />







          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
