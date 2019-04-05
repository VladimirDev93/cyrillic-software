import { Meteor } from 'meteor/meteor';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Search from './components/search';
import Register from './components/register';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';

const App = () => (
  <BrowserRouter>
    { Meteor.userId() ? <Route path="/" component={Search} /> : <Route exact path="/" component={Home} /> }
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Register} />
  </BrowserRouter>
);

export default App;
