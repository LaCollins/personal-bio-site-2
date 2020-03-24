import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './App.scss';

import Bio from '../components/pages/Bio/Bio';
import Projects from '../components/pages/Projects/Projects';
import Technologies from '../components/pages/Technologies/Technologies';

class App extends React.Component {
  render() {
    return (
      <div className="App">
       <Router>
         <div>
           <nav>
             <ul>
               <li>
                 <Link to="/">Bio</Link>
               </li>
               <li>
                 <Link to="/projects">Projects</Link>
               </li>
               <li>
                 <Link to="/technologies">Technologies</Link>
               </li>
             </ul>
           </nav>
         </div>

         <Switch>
            <Route path="/" exact component={Bio} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/technologies" exact component={Technologies} />
         </Switch>
       </Router>
      </div>
    );
  }
}

export default App;
