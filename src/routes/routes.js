import React from 'react';
import { Switch } from 'react-router';
import { Route, BrowserRouter } from 'react-router-dom';
import {
  AmplifyAuthContainer,
  AmplifyAuthenticator,
  AmplifySignOut,
} from '@aws-amplify/ui-react';
import NavBar from '../components/navbar';
import Landing from '../home/landing';
import Dashboard from '../dashboard/Index';

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <AmplifyAuthContainer>
          <AmplifyAuthenticator
            color='red'
            slot=''
            formFields={[
              {
                type: 'email',
                inputProps: { required: true, autocomplete: 'username' },
              },
              {
                type: 'password',
                inputProps: { required: true, autocomplete: 'new-password' },
              },
              {
                type: 'phone_number',
                inputProps: { required: true, autocomplete: 'phone-no' },
              },
            ]}
          >
            <Route exact path='/dashboard' component={Dashboard} />
          </AmplifyAuthenticator>
        </AmplifyAuthContainer>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
