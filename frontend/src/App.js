import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import StudentDashPage from './pages/student_dash';
import Adder from "./components/Teacher_Dash/Adder";
import List from "./components/Teacher_Dash/List";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/studentdash' component={StudentDashPage} exact />
        <Route path="/addLessons" exact component={Adder} />
        <Route path="/listLessons" exact component={List} />
      </Switch>
    </Router>
  );
}

export default App;
