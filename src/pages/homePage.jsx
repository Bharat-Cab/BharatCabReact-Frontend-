import React from 'react'
import LandingPage from '../components/LandingPage/landingpage';
import SearchBox from '../components/Searchbar/searchbar';
import { FooterCab } from '../components/Footer/bigfooter';

const homePage = () => {

  return (
    <div>
        <LandingPage/>
        <SearchBox/>
        
    </div>
  )
}



export default homePage;