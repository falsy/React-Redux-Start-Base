import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import './scss/app';

//part
import Header from './partials/header';
import Footer from './partials/footer';

//content view
import Home from './views/Home';
import Temp from './components/tempComponent';
import NotFound from './views/NotFound';

export default class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <div className="content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/temp" component={Temp} />
                <Route component={NotFound}/>
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
  
}