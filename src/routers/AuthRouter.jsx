import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "../pages/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen";
import { auth, onAuthStateChanged } from "../firebase/config-firebase";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";

const AuthRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(login(user.uid, user.displayName));
    });
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
      </Switch>
    </Router>
  );
};

export default AuthRouter;
