import React, { useEffect, useRef } from 'react';
import { Redirect, Switch } from 'react-router';
import { Route, BrowserRouter } from 'react-router-dom';
import NavBar from '../components/navbar';
import Landing from '../home/landing';
import Dashboard from '../dashboard/Index';
import Posform from '../home/posform';
import {
  AmplifyAuthContainer,
  AmplifyAuthenticator,
} from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import Login from '../home/login';
import Customers from '../pages/customers/Customers';

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/customers' component={Customers} />
        <Posform exact path='/posform' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

const PrivateRoute = ( { component: Component, ...rest }) => {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
      return onAuthUIStateChange((nextAuthState, authData) => {
          setAuthState(nextAuthState);
          setUser(authData)
          setLoading(false)
      });
  }, []);


  return (
    <Route
      {...rest}
      render={props => {
  
        if (authState !== AuthState.SignedIn && !loading && !user ) {
          // not logged in so redirect to login page with the return url
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        // authorised so return component
        return <Component {...props} />
      }}
    />
  )

// return authState === AuthState.SignedIn && user ? (
//     <div className="App">
//         <div>Hello, {user.username}</div>
//         <AmplifySignOut />
//     </div>
//   ) : (
//     <AmplifyAuthenticator />
// );
}

const useComponentWillMount = (cb) => {
  const willMount = useRef(true)

  if (willMount.current) cb()

  willMount.current = false
}