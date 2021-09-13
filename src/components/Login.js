import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "./Header";
import { AppContext } from "../contexts/AppContext";
import { appRoutes } from "../utils/constants";

const Login = () => {
  const loggedIn = useContext(AppContext).loggedIn;

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="login">
        <form
          className="form form_theme_dark"
          name="form-login"
          onSubmit={handleSubmit}
        >
          <h2 className="form__heading form__heading_theme_dark">Вход</h2>
          <input
            className="form__input form__input_theme_dark"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="form__input form__input_theme_dark"
            type="password"
            placeholder="Пароль"
            minLength={8}
            maxLength={15}
            required
          />
          <button
            className="form__button-submit form__button-submit_theme_dark"
            type="submit"
          >
            Войти
          </button>
        </form>
      </section>
    </>
  );
};

Login.propTypes = {};

export default Login;
