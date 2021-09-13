import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import auth from '../utils/auth';
import { appRoutes } from '../utils/constants';
import { AppContext } from '../contexts/AppContext';

const Register = () => {
  const loggedIn = useContext(AppContext).loggedIn;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    auth.register(email, password)
    .then(res => {
      if (res) {
          this.props.history.push(appRoutes.root);
      } else {
        console.log('Что-то пошло не так!');
      }
    });
  };

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className='register'>
        <form
          className='form form_theme_dark'
          name='form-register'
          onSubmit={handleSubmit}
        >
          <h2 className='form__heading form__heading_theme_dark'>
            Регистрация
          </h2>
          <input
            className='form__input form__input_theme_dark'
            name='register-name'
            type='email'
            placeholder='Email'
            value={email || ''}
            onChange={handleEmailChange}
            required
          />
          <input
            className='form__input form__input_theme_dark'
            name='register-password'
            type='password'
            placeholder='Пароль'
            minLength={8}
            maxLength={15}
            value={password || ''}
            onChange={handlePasswordChange}
            required
          />
          <button
            className='form__button-submit form__button-submit_theme_dark'
            type='submit'
          >
            Зарегистрироваться
          </button>
        </form>
        <div className='register__signin'>
          <p className='register__question'>Уже зарегистрированы?</p>
          <Link className='link register__link' to={appRoutes.signIn}>
            Войти
          </Link>
        </div>
      </section>
    </>
  );
};

Register.propTypes = {};

export default Register;
