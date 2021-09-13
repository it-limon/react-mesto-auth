import { Link, useHistory } from 'react-router-dom';
import { appRoutes } from '../utils/constants';
import PropTypes from 'prop-types';

const HeaderMenu = (props) => {
  const hst = useHistory();

  const { isMobile, isInactive, loggedIn } = props;

  return (
    <nav
      className={`header__menu${
        isInactive && isMobile ? ' header__menu_inactive' : ''
      }${isMobile ? ' header__menu_mobile' : ''}`}
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
  loggedIn: PropTypes.bool.isRequired,
};

export default HeaderMenu;
