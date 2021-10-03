import './App.css'
import { Route, Switch } from 'react-router-dom';

//COMPONENTS
import Home from './Pages/Home';
import Signup from './Pages/SignUp';
import Signin from './Pages/SignIn';
import Userinfo from './Pages/UserInfo';
import MainPage from './Pages/MainPage';

import React from 'react';

import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import Store  from './Store';
import { persistedStore } from './Store/PersistedStore';

function App() {
    return (
    <div className="App">
    <Provider store={ Store }>
    <PersistGate loading={null} persistor={persistedStore}>
      <Switch> 
            <Route path="/" component={(routeProps)=> <Home {...routeProps}/>} exact/>
            <Route path="/signup" component={(routeProps)=> <Signup {...routeProps}/> } />
            <Route path="/signin" component={(routeProps)=> <Signin {...routeProps}/> } />
            <Route path="/userinfo" component={(routeProps)=> <Userinfo {...routeProps}/> } />
            <Route path="/mainpage" component={(routeProps)=> <MainPage {...routeProps}/> } />
            <Route component= { Error } /> 
      </Switch>
      </PersistGate>
  </Provider>
    </div>
    )
};

export default App;
