import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../../firebase/firebaseContest';
import { Logout } from '../../firebase/firebaseFunctions';
function Header() {
  const {userData} = useContext(FirebaseContext);
  console.log(userData);

  const Navigate = useNavigate();
  const Redirect = useNavigate()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{userData ? userData.name||userData.displayName : <a href='/login' >Login</a>}</span>
          <hr />
        </div>
        {userData && <button onClick={()=>{Logout();window.location.href = '/login';}} className='link-button'>Logout</button>}

        <div className="sellMenu" onClick={()=>userData?Navigate('/create'):Navigate('/login')}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
