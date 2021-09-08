import './App.css'

import { Route, Switch } from 'react-router-dom';

//COMPONENTS
import Home from './Pages/Home';
import Signup from './Pages/SignUp';
import Signin from './Pages/SignIn';

function App() {
  return (
    <div className="App">
      
      <Switch> 
            <Route path="/" component={(routeProps)=> <Home/>} exact/>
            <Route path="/signup" component={(routeProps)=> <Signup/> } />
            <Route path="/signin" component={(routeProps)=> <Signin/> } />
            <Route component= { Error } /> 
        </Switch>
    </div>
  );
}

export default App;
