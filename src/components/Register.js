import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import { appRoutes } from '../utils/constants';
import { AppContext } from '../contexts/AppContext';

const Register = () => {
  const loggedIn = useContext(AppContext).loggedIn;

  const handleSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className='register'>
        <form className='form form_theme_dark' name='form-register' onSubmit={handleSubmit}>
          <h2 className='form__heading form__heading_theme_dark'>Регистрация</h2>
          <input className='form__input form__input_theme_dark' type='email' placeholder='Email' required />
          <input className='form__input form__input_theme_dark' type='password' placeholder='Пароль' minLength={8} maxLength={15} required />
          <button className='form__button-submit form__button-submit_theme_dark' type='submit'>Зарегистрироваться</button>
        </form>
        <div className='register__signin'>
          <p className='register__question'>Уже зарегистрированы?</p>
          <Link className='register__link' to={appRoutes.signIn}>Войти</Link>
        </div>
      </section>
    </>
  );
}

Register.propTypes = {

};

export default Register;
