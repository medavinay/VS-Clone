import React from 'react'
import "./styles.css";
import Logo from "../Assets/Logo/vs.jpg";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageIcon from '@mui/icons-material/Language';
import BasicMenu from './ProfileMenu';
import SimpleBottomNavigation from './BottomNav'
import MobileSearchBar from '../MobileSearchBar';


function Header() {
  return (
    <div className='navbar'>
<img src={Logo} alt="Logo" className='nav'/>
<div className='search-bar'>
<div className='search-bar-text'>Any where</div>
<div className='search-bar-text'>Any week</div>
<div className='search-bar-text2'>Add guests</div>
<div className='search-icon-div'><SearchRoundedIcon className='search-icon'/></div>
</div>

<div className='profile-container'>
    <div className='airbus-your-home'>Airbus-your-home</div>
    <div className='airbus-your-home'><LanguageIcon/></div>
 <div className='profile-div'>
    <BasicMenu></BasicMenu>
 </div>
</div>  

<MobileSearchBar></MobileSearchBar>
<SimpleBottomNavigation/>


    </div>
  )
}

export default Header;