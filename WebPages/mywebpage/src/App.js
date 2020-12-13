import React from 'react';
import {Footer, Navbar} from './componets';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Product from './pages/Product/Porduct';
import SignUp from './pages/Sign-Up/SignUp';
function App() {
  return (
    <Router>
    <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Product} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;


