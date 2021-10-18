import './App.css';
import Home from './components/Home';
import displayit from './components/Test_display';
import Sign_Up from './components/Sign_Up';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/display">Display</a>
                </li>
          </ul> 
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/display" exact component={displayit} />
            <Route path="/sign_up" exact component={Sign_Up} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
