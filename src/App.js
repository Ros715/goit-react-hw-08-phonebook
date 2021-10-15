import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar";
import HomeView from "./views/HomeView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import ContactsView from "./views/ContactsView";
import authOperations from "./redux/auth/auth-operations";
import { PrivateRoute } from "./components/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
        <Route component={HomeView} exact path="/" />
        <PublicRoute component={RegisterView} path="/register" />
        <PublicRoute component={LoginView} path="/login" />
        <PrivateRoute component={ContactsView} path="/contacts" />
      </Switch>
    </Container>
  );
};

export default App;
