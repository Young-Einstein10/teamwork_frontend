import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import jwtDecode from 'jwt-decode';
// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userDetailsActions';
// Components
import Navbar from './components/layout/Navbar';
import AuthRoute from './util/AuthRoute';
// Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
import Dashboard from './pages/Dashboard';
import FullArticlePage from './pages/FullArticlePage';
import CreatePost from './pages/CreatePost';
import PostArticle from './pages/PostArticle';
import EditArticle from './pages/EditArticle.js';
import PostGif from './pages/PostGif';

import axios from 'axios';


axios.defaults.baseURL =
  'http://localhost:5000/api/v1';

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    // store.dispatch(logoutUser());
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData(decodedToken.userId));
  }
}

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={home} />
                <AuthRoute exact path="/login" component={login} />
                <AuthRoute exact path="/signup" component={signup} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/createpost" component={PostArticle} />
                <Route exact path="/postarticle" component={PostArticle} />
                <Route exact path="/postgif" component={PostGif} />
                <Route exact path={"/FullArticlePage/:id"} component={FullArticlePage} />
                <Route exact path={"/FullArticlePage/:id/delete"} component={FullArticlePage} />
                <Route exact path={"/FullArticlePage/:id/edit"} component={EditArticle} />
                {/* <Route path={"/FullGifPage/:id"} component={FullGifPage} />
                <Route path={"/FullGifPage/:id/edit"} component={FullGifPage} />              */}
              </Switch>
            </div>
          </Router>
        </Provider>      
    );
  }
}

export default App;
