import './App.css';
import Home from './home';
import Resume from './resume';
import Study from './study';
import Misc from './misc';
import Admin from './admin';
import Post from './post';
import Login from './login';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/study" component={Study}/>
          <Route path="/misc" component={Misc}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/post" component={Post}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </Router>
    
  );
}

export default App;
