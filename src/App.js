import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Default from './components/Default'
import Cart from './components/Cart'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        < Route exact path="/" component={ProductList} />
        < Route path="/cart" component={Cart} />
        < Route path="/details" component={Details} />
        < Route component={Default} />
      </Switch>
    </>
  )
}

export default App;
