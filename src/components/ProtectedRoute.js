import { Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import { appRoutes } from '../utils/constants';

const ProtectedRoute = ({ component: Component, ...otherProps }) => {
  const {
    loggedIn
  } = otherProps;

  return (
    <Route>
      {loggedIn ? <Component {...otherProps} /> : <Redirect to={appRoutes.signIn} /> }
    </Route>

  );
}

ProtectedRoute.propTypes = {

};

export default ProtectedRoute;
