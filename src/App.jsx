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


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path={"/"} element={ <HomePage/> } />
        <Route path={"/publishride"} element={<PublishNewRide/>}/>
        <Route path={"/details"} element={<CarOwnerDetails/>}/>
        <Route path={"/profile"} element={<LoginPage/>}/>
        
      </Routes> 
     <FooterMain/>
      
      {/* <NavBar /> 
      <LandingPage />
      <SearchBox />     
      <RideCard/> */}
    </div>
  );
}

export default App;
