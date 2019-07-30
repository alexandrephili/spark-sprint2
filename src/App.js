import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';

const TestComp = props => {
  return (
    <div>
      HOMEPAGE
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={TestComp} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

/*
        <Route path='/signin' component={SignInAndSignUpPage} />
*/

export default App;
