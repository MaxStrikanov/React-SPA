import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './component/Home/home';
import About from './component/About/about';
import Form from './component/Registration/form';
import Reviews from './component/Reviews/reviews';
import Services from './component/Services/services';
import Contacts from './component/Contacts/contacts';


ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/reviews" component={Reviews} />
        <Route exact path="/services" component={Services} />
    
        
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));



