import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { appRoutes } from "../utils/constants";
import { AppContext } from "../contexts/AppContext";
import PropTypes from 'prop-types';

const HeaderMenu = (props) => {
  const hst = useHistory();
  const loggedIn = useContext(AppContext).loggedIn;

  return (
    <nav className={`header__menu${props.visible ? ' header__menu_active' : ''} `}>
      {loggedIn && <h2 className='header__menu-heading'>EmaiEmail@Email</h2>}
      <ul className='header__menu-links'>
        {loggedIn ? (
          <>
          <li className='header__menu-link'>ВыйтиВыйтиВыйти</li>
          <li className='header__menu-link'>ВыйтиВыйтиВыйти</li>
          <li className='header__menu-link'>ВыйтиВыйтиВыйти</li>
          <li className='header__menu-link'>ВыйтиВыйтиВыйти</li>
          </>
        ) : hst.location.pathname === appRoutes.signIn ? (
          <li className='header__menu-link'>Регистрация</li>
        ) : (
          <li className='header__menu-link'>Войти</li>
        )}
      </ul>
    </nav>
  );
};

HeaderMenu.propTypes = {
  visible: PropTypes.bool.isRequired
};


export default HeaderMenu;
