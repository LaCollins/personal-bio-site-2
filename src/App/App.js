import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.scss';

import NavBar from '../components/shared/NavBar/NavBar';
import Bio from '../components/pages/Bio/Bio';
import Projects from '../components/pages/Projects/Projects';
import Technologies from '../components/pages/Technologies/Technologies';
import Contact from '../components/pages/Contact/Contact';

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <Router>
       <NavBar />
         <Switch>
            <Route path="/" exact component={Bio} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/technologies" exact component={Technologies} />
            <Route path="/contact" exact component={Contact} />
         </Switch>
       </Router>
      </div>
    );
  }
}

export default App;
