import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavContainer from './header/nav_container';
import Footer from './footer/footer';
import HomeContainer from './home/home_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SneakerIndexContainer from './sneaker/sneaker_index_container';
import SneakerDetailContainer from './sneaker/sneaker_detail_container';
import SearchContainer from './search/search_container';
import CartItemsIndexContainer from './cart_items/cart_items_index_container';
import Styles from './styles/styles';
import AuthRoute from '../util/route_util';

const App = () => (
  <div>
    <main className="main-content-container">
      <header className="header-container">
        <NavContainer />
      </header>
      <Switch>
        <Route path="sneakers/:sneakerId/listings/:listingId" component={ SignupFormContainer }/>
        <Route path="/sneakers/:sneakerId" component={ SneakerDetailContainer } />
        <Route path="/sneakers" component={ SneakerIndexContainer } />
        <Route path="/search" component={ SearchContainer } />
        <Route path="/cart" component={ CartItemsIndexContainer } />
        <Route path="/styles" component={ Styles } />
        <AuthRoute path="/login" component={ LoginFormContainer } />
        <AuthRoute path="/signup" component={ SignupFormContainer } />
        <Route exact path="/" component={ HomeContainer } />
      </Switch>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;