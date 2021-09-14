import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import auth from '../utils/auth';
import { AppContext } from '../contexts/AppContext';
import { appRoutes } from '../utils/constants';
import Header from './Header';

const Login = () => {
  const showInfoToolTip = useContext(AppContext).showInfoToolTip;
  const handleLogin = useContext(AppContext).handleLogin;

  const hst = useHistory();

  const [loginData, setLoginData] = useState({});
  const handleChange = (evt) => {
    setLoginData({
      ...loginData,
      [evt.target.name]: evt.target.value
    });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    auth.authorize(loginData.email, loginData.password)
    .then(data => {
      if (data.token) {
        setLoginData({});
        localStorage.setItem('jwt', data.token);
        handleLogin();
        hst.push(appRoutes.root);
      } else {
        showInfoToolTip(true);
      }
    })
    .catch(() => {
      showInfoToolTip(true);
    });
  }

  return (
    <>
      <Header />
      <section className='login'>
        <form
          className='form form_theme_dark'
          name='form-login'
          onSubmit={handleSubmit}
        >
          <h2 className='form__heading form__heading_theme_dark'>Вход</h2>
          <input
            className='form__input form__input_theme_dark'
            name='email'
            type='email'
            placeholder='Email'
            value={loginData.email || ''}
            onChange={handleChange}
            required
          />
          <input
            className='form__input form__input_theme_dark'
            name='password'
            type='password'
            placeholder='Пароль'
            minLength={8}
            maxLength={15}
            value={loginData.password || ''}
            onChange={handleChange}
            required
          />
          <button
            className='form__button-submit form__button-submit_theme_dark'
            type='submit'
          >
            Войти
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;
