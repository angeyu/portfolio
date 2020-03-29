import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from './components/Container/index';
import Nav from './components/Nav/index';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/" exact component={About}/>
        <Container>
            <Route path="/about" component={About}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contact" component={Contact}/>
        </Container>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
