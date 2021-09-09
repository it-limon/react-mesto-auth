import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import headerLogo from '../images/header-logo.svg';
import HeaderMenu from './HeaderMenu';
import { AppContext } from '../contexts/AppContext';
import { appRoutes } from '../utils/constants';

const MAX_MOBILE_WIDTH = 767;

function Header(props) {
  const loggedIn = useContext(AppContext).loggedIn;

  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MAX_MOBILE_WIDTH);

  const handleBurgerClick = () => {
    setIsActiveMenu(!isActiveMenu);
  }

  const resizeWindow = () => {
    const isMobileNew = window.innerWidth <= MAX_MOBILE_WIDTH;
    if (isMobileNew !== isMobile) {
      setIsMobile(isMobileNew);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);

    return () => window.removeEventListener("resize", resizeWindow);
  }, [isMobile]);

  return (
    <header className='header'>
      <div className='header__containter'>
        <Link to={appRoutes.root}><img className='header__logo' src={headerLogo} alt='Место: Россия' /></Link>
        <div className={`button header__burger${isActiveMenu ? ' header__burger_active' : ''}`} onClick={handleBurgerClick}>
          <span className={`header__burger-item${isActiveMenu ? ' header__burger-item_active' : ''}`}></span>
        </div>
      </div>
      <HeaderMenu visible={isMobile && isActiveMenu} />
    </header>
  );
}

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

export default Header;
