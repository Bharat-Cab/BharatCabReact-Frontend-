import NavBar from './components/Header/NavBar';
//import Footer from './components/Footer/footer';
import Contact from './components/Footer/Footer';
import LandingPage from './components/LandingPage/landingpage';
import SearchBox from './components/Searchbar/searchbar';
import RideCard from './components/detailscard/details';
import {Route, Routes} from "react-router-dom";
import './App.css';
import RideDetailsPage from './pages/rideDetails';
import CarOwnerDetails from './pages/CarOwner';
import HomePage from './pages/homePage';
import PublishNewRide from './pages/PublishRide';
import { FooterCab } from './components/Footer/bigfooter';
import FooterMain from './components/Footer/Footer';
import LoginPage from './pages/Login/login';
import FullWidthSteps from './components/Steps/steps';
import ProfilePage from './pages/ProfilePage/profiilePage';
import SearchResult from './pages/SearchResult';
import SearchRide from './pages/NavSearch/SearchRide';
import Page from './Component/Page';
import Page1 from './Component/Page1';
import Page2 from './Component/Page2';
import Page3 from './Component/Page3';
import Page4 from './Component/Page4';
import Page5 from './Component/Page5';
import AddMiniBio from './pages/ProfilePage/AddMiniBio';
import ProfilePicture from './pages/ProfilePage/ProfilePicture';
import PersonalDetails from './pages/ProfilePage/PersonalDetails';
import TravelPreference from './pages/ProfilePage/TravelPreference';
import Chatting from './pages/ProfilePage/Chatting';
import Music from './pages/ProfilePage/Music';
import Pets from './pages/ProfilePage/Pets';
import VehicleBrand from './pages/ProfilePage/VehicleBrand';
import VehicleColor from './pages/ProfilePage/VehicleColor';
import VehicleModel from './pages/ProfilePage/VehicleModel';
import GovernmentId from './pages/ProfilePage/GovernmentId';
import AdharCard from './pages/ProfilePage/AdharCard';  // Component for Aadhaar card page
import PanCard  from './pages/ProfilePage/PanCard';
import PaymentDetails  from './pages/Payment/PaymentDetails';
import Logout from './pages/Logout/logout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={ <LoginPage/>} />
        <Route path={"/home"} element={<HomePage/>} />
        <Route path={"/publishride"} element={<PublishNewRide/>}/>
        <Route path={"/search"} element={<SearchRide/>}/>
        <Route path={"/details"} element={<RideDetailsPage/>}/>
        <Route path={"/carowner"} element={<CarOwnerDetails/>}/>
        <Route path="/page" element={<Page />}></Route>
        <Route path="/Page1" element={<Page1 />}></Route>
        <Route path="/Page2" element={<Page2 />}></Route>
        <Route path="/Page3" element={<Page3 />}></Route>
        <Route path="/Page4" element={<Page4 />}></Route>
        <Route path="/Page5" element={<Page5 />}></Route>
        <Route path={"/profile"} element={<ProfilePage/>}/>
        <Route path={"/ProfilePicture"} element={<ProfilePicture />}></Route>
        <Route path={"/PersonalDetails"} element={<PersonalDetails />}></Route>
        <Route path="/AddMiniBio" element={<AddMiniBio/>}></Route>
        <Route path="/TravelPreference" element={<TravelPreference />} ></Route> */
        <Route path="/Chatting" element={<Chatting />}></Route> 
        <Route path="/Music" element={<Music/>}></Route>
        <Route path="/Pets" element={<Pets/>}></Route>
        <Route path="/VehicleBrand" element={<VehicleBrand />}></Route>
        <Route path="/VehicleModel" element={<VehicleModel />}></Route>
        <Route path="/VehicleColor" element={<VehicleColor />}></Route>
        <Route path="/GovernmentId" element={<GovernmentId />} />
        <Route path="/AdharCard" element={<AdharCard />} />
        <Route path="/PanCard" element={<PanCard />} />
        <Route path="/PaymentDetails" element={<PaymentDetails/>} />
        <Route path="/Logout" element={<Logout/>} />

        
      </Routes> 
      
      {/* <NavBar /> 
      <LandingPage />
      <SearchBox />     
      <RideCard/> */}
    </div>
  );
}

export default App;
