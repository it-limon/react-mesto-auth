import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { appRoutes } from '../utils/constants';
import { AppContext } from '../contexts/AppContext';
import PropTypes from 'prop-types';

const HeaderMenu = (props) => {
  const hst = useHistory();
  const loggedIn = useContext(AppContext).loggedIn;

  return (
    <nav
      className={`header__menu${
        props.isMobile ? ' header__menu_type_mobile' : ' header__menu_type_full'
      }${props.isInactive && props.isMobile ? ' header__menu_inactive' : ''}`}
    >
      {loggedIn && <h2 className='header__menu-heading'>EmaiEmail@Email</h2>}
      <ul className='header__menu-links'>
        {loggedIn ? (
          <li className='link header__menu-link'>Выйти</li>
        ) : hst.location.pathname === appRoutes.signIn ? (
          <li>
            <Link className='link header__menu-link' to={appRoutes.signUp}>
              Регистрация
            </Link>
          </li>
        ) : (
          <li>
            <Link className='link header__menu-link' to={appRoutes.signIn}>
              Войти
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

HeaderMenu.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isInactive: PropTypes.bool.isRequired,
};

export default HeaderMenu;
