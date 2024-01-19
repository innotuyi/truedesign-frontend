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
import Folder from './Folder'
import AnnualReport from './AnnualReport'
import Invitation from './Invitation'
import NewLetter from './NewsLetter'
import NoteBooks from './NoteBooks'
import Diaries from './Diaries'
import Card from './IDCards'
import Envilope from './Envilopes'
import ReflectiveStickerImage from './ReflectiveStickerImage'
import Pv from './PVCStickers'
import Contravision from './Contravision'
import WallPaper from './Wallpapers'
import Gazebo from './Gazebo'
import WheelCovers from "./WheelConvers";
import Frost from './FrostStickers'
import TShirt from './TShirt'
import Umbrella from './Umbrellas'
import Overall from './Overalls'
import Uniforms from './Uniforms'
import Exhibition from './ExhibitionBooth'
import Interior from './OfficeInterior'
import DirectionDoorSigns from './DirectionDoorSigns'
import Car from './CarBranding'
import Sign from './IlluminatedSigns'
import Three from './ThreeDSigns'
import Street from './StreetSigns'
import Board from './Billboards'
import Safety from './SafetySigns'
import Business from './BusinessWebsite'
import Commerce from './EcommerceWebsite'
import Domain from './DomainAndEmail'
import Pen from './ExecutivePens'
import Mug from './Mugs'
import Table from './TableTalkers'
import Talker from './AcrylicTableTalkers'
import Ring from './ExecutiveKeyRings'
import Submission from './SubmissionTravelMug'
import Wedding from './Wedding'
import Birthday from './Birthday'
import Corporarte from './Corporate'
import Music from './Music'
import Advert from './Adverts'
import Documentary from './Documentaries'
import Video from './DocumentaryVideos'
import Photography from './Photography'
import ThreeDPrintingAndLighting from './ThreeDPrintingAndLighting'
import CartonsBoxes from './CartonsBoxes'
import Hat from './Hats'
import WaterBottleBranding from './WaterBottleBranding'
import RainCoat from './RainCoats'
import OfficeDesigning from './OfficeDesigning'
import BooksDesigning from './BooksDesigning;'
import LargeFormatPrinting from "./LarageFormatPrinting";
import GiftBag from './GiftBags'
import ConferenceBag from './ConferenceBag'
import VideoTransitions from './VideoTransitions'
import ETenderingProcessTraining from './ETenderingProcessTraining'
import CompanyProfile from './CompanyProfile'
import QuickBooksTraining from './QuickBooksTraining'
import TaxDeclarationTraining from './TaxDeclarationTraining'
import ConceptNoteDeveloping from './ConceptNoteDeveloping'
import BusinessPlan from './BusinessPlan'
import StrategicPlanning from './StrategicPlanning'
import FinancialAnalysis from './FinancialAnalysis'
import EBMUsingTraining from './EBMUsingTraining'
import BusinessAdvisory from './BusinessAdvisory'
import Order from './Order'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home />} exact/>
          <Route path="service"  element={<Service />} />
          <Route path=""  element={<Service />} />
          <Route path="order"  element={<Order />} />

          <Route path="BusinessPlan"  element={<BusinessPlan />} />
          <Route path="BusinessAdvisory"  element={<BusinessAdvisory />} />

          <Route path="FinancialAnalysis"  element={<FinancialAnalysis />} />
          <Route path="EBMUsingTraining"  element={<EBMUsingTraining />} />




          <Route path="conference"  element={<ConferenceBag />} />
          <Route path="concept"  element={<ConceptNoteDeveloping />} />
          <Route path="tax"  element={<TaxDeclarationTraining />} />
          <Route path="profile"  element={<CompanyProfile />} />
          <Route path="VideoTransitions"  element={<VideoTransitions />} />
          <Route path="tendering"  element={<ETenderingProcessTraining />} />
          <Route path="QuickBooksTraining"  element={<QuickBooksTraining />} />

          <Route path="StrategicPlanning"  element={<StrategicPlanning />} />





          <Route path="video"  element={<Video />} />
          <Route path="printing"  element={<ThreeDPrintingAndLighting />} />
          <Route path="cartonsBoxes"  element={<CartonsBoxes />} />
          <Route path="hats"  element={<Hat />} />
          <Route path="waterBottleBranding"  element={<WaterBottleBranding />} />
          <Route path="rainCoat"  element={<RainCoat />} />
          <Route path="office"  element={<OfficeDesigning />} />
          <Route path="booksDesigning"  element={<BooksDesigning />} />
          <Route path="formatPrinting"  element={<LargeFormatPrinting />} />
          <Route path="giftbag"  element={<GiftBag />} />

          <Route path="pen"  element={<Pen />} />
          <Route path="mug"  element={<Mug  />} />
          <Route path="table"  element={<Table  />} />
          <Route path="talker"  element={<Talker  />} />
          <Route path="ring"  element={<Ring  />} />
          <Route path="submission"  element={<Submission  />} />
          <Route path="wedding"  element={<Wedding  />} />
          <Route path="birthday"  element={<Birthday  />} />
          <Route path="corporate"  element={<Corporarte  />} />
          <Route path="music"  element={<Music  />} />
          <Route path="advert"  element={<Advert  />} />
          <Route path="documentary"  element={<Documentary  />} />
          <Route path="photography"  element={<Photography  />} />













          <Route path="folder"  element={<Folder />} />
          <Route path="report"  element={<AnnualReport />} />
          <Route path="invitation"  element={<Invitation />} />
          <Route path="newsletter"  element={<NewLetter />} />
          <Route path="notebook"  element={<NoteBooks />} />
          <Route path="diaries"  element={<Diaries />} />
          <Route path="card"  element={<Card />} />
          <Route path="envilope"  element={<Envilope />} />
          <Route path="ReflectiveStickerImage"  element={<ReflectiveStickerImage />} />
          <Route path="pv"  element={<Pv />} />
          <Route path="Contravision"  element={<Contravision />} />
          <Route path="wallpaper"  element={<WallPaper />} />
          <Route path="gazebo"  element={<Gazebo />} />
          <Route path="whell"  element={<WheelCovers />} />
          <Route path="frost"  element={<Frost />} />
          <Route path="shirt"  element={<TShirt  />} />
          <Route path="Umbrella"  element={<Umbrella  />} />
          <Route path="overall"  element={<Overall  />} />
          <Route path="uniform"  element={<Uniforms  />} />
          <Route path="exhibition"  element={<Exhibition  />} />
          <Route path="interior"  element={<Interior  />} />
          <Route path="DirectionDoorSigns"  element={<DirectionDoorSigns  />} />
          <Route path="car"  element={<Car  />} />
          <Route path="sign"  element={<Sign  />} />
          <Route path="three"  element={<Three  />} />
          <Route path="street"  element={<Street  />} />
          <Route path="board"  element={<Board  />} />
          <Route path="safety"  element={<Safety  />} />
          <Route path="commerce"  element={<Commerce  />} />
          <Route path="business"  element={<Business   />} />
          <Route path="domain"  element={<Domain   />} />





















          










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
