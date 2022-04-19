import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import StudentDashPage from "./pages/student_dash";
import CreateCourse from "./components/Teacher_Dash_Test/course/create";
import ListCourse from "./components/Teacher_Dash_Test/course/list";
import CreateLesson from "./components/Teacher_Dash_Test/lesson/create";
import ListLesson from "./components/Teacher_Dash_Test/lesson/list";
import ViewCourse from "./components/Teacher_Dash_Test/course/view";
import ListCourseLesson from "./components/Teacher_Dash_Test/course/listlesson";
import Adder from "./components/Teacher_Dash/Adder";
import List from "./components/Teacher_Dash/List";
import FeedbackAI from "./components/FeedbackAI";
import quiz from "./components/quiz/quiz";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/studentdash" component={StudentDashPage} exact />
        <Route path="/course/create" exact component={CreateCourse} />
        <Route path="/course/list" exact component={ListCourse} />
        <Route path="/lesson/create" exact component={CreateLesson} />
        <Route path="/lesson/list" exact component={ListLesson} />
        <Route path="/course/view" exact component={ViewCourse} />
        <Route path="/addLessons" exact component={Adder} />
        <Route path="/course/listlesson" exact component={ListCourseLesson} />
        <Route path="/listLessons" exact component={List} />
        <Route path="/feedback" exact component={FeedbackAI} />
        <Route path="/quizzes" exact component={quiz} />
      </Switch>
    </Router>
  );
}

export default App;
