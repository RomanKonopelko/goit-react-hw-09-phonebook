import React, { Suspense, lazy, useEffect } from 'react';
import { Redirect } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import Container from './Components/Contacts/Container';
import AppBar from './Components/NavBar/AppBar';
import authOperations from './redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import PublicRoute from './Components/PublicRoute';
import PrivateRoute from './Components/PrivateRoute';
import Loader from './Components/Loader/Loader';

const HomeView = lazy(() => import('./Views/HomeView'));
const LoginView = lazy(() => import('./Views/LoginView'));
const ContactsView = lazy(() => import('./Views/ContactsView'));
const RegisterView = lazy(() => import('./Views/RegisterView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser);
  }, []);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Redirect path="/goit-react-hw-08-phonebook" to="/" />
          <Route exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            component={RegisterView}
            restricted
            redirectTo="/contacts"
          />
          <PublicRoute path="/login" restricted component={LoginView} redirectTo="/contacts" />
          <PrivateRoute path="/contacts" component={ContactsView} redirectTo="/login" />
        </Switch>
      </Suspense>
    </Container>
  );
}
