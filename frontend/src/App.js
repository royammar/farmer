import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from '../src/Pages/Home'
import './styles/global.scss';  
import NavBar from './cmps/NavBar';
import Products from './Pages/Products'
import WishList from './Pages/WishList'
import ProductContextProvider from './contexts/ProductContext'
import UserContextProvider from './contexts/UserContext';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import FAQ from './Pages/FAQ';
import Footer from './cmps/Footer';



const history = createBrowserHistory();
;

function App() {
  return (
      <Router history={history}>
        <UserContextProvider>
        <ProductContextProvider>
        <NavBar></NavBar>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/products" component={Products} exact></Route>
          <Route path="/wishlist" component={WishList} exact></Route>
          <Route path="/cart" component={Cart} exact></Route>
          <Route path="/login" component={Login} exact></Route>
          <Route path="/signup" component={SignUp} exact></Route>
          <Route path="/faq" component={FAQ} exact></Route>
          <Route path="/shop/:id" component={Shop} exact></Route>
        </Switch>
        <Footer></Footer>
       </ProductContextProvider>
       </UserContextProvider>
      </Router>
  );
}

export default App;
