import './App.css'

import { Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';


//COMPONENTS
import Home from './Pages/Home';
import Signup from './Pages/SignUp';
import Signin from './Pages/SignIn';
import Userinfo from './Pages/UserInfo';
import MainPage from './Pages/MainPage';

import store from './Store/index'



function App() {

  return (
    <Provider store={store}>
    <div className="App">
      
      <Switch> 
            <Route path="/" component={(routeProps)=> <Home {...routeProps}/>} exact/>
            <Route path="/signup" component={(routeProps)=> <Signup {...routeProps}/> } />
            <Route path="/signin" component={(routeProps)=> <Signin {...routeProps}/> } />
            <Route path="/userinfo" component={(routeProps)=> <Userinfo {...routeProps}/> } />
            <Route path="/mainpage" component={(routeProps)=> <MainPage {...routeProps}/> } />
            <Route component= { Error } /> 
        </Switch>
    </div>
    </Provider>
  );
}

export default App;
