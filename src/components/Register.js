import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Register = () => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <section className='register'>
      <form name='' className='form form_theme_dark' onSubmit={handleSubmit}>
        <h2 className='form__heading form__heading_theme_dark'>Регистрация</h2>
        <input className='form__input form__input_theme_dark' type='email' placeholder='Email' />
        <input className='form__input form__input_theme_dark' type='password' placeholder='Пароль' />
        <button className='form__button-submit form__button-submit_theme_dark' type='submit'>Зарегистрироваться</button>
      </form>
      <div className='register__signin'>
        <p className='register__question'>Уже зарегистрированы? </p>
        <Link className='register__link' to='/login'>Войти</Link>
      </div>
    </section>
  );
}

Register.propTypes = {

};

export default Register;
