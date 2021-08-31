import './app.scss';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useState } from 'react';

//Screens
import HomeScreen from './screens/HomeScreen/HomeScreen'
import ProductScreen from './screens/ProductScreen/ProductScreen'
import CartScreen from './screens/CartScreen/CartScreen'
import Menu from './components/Menu/Menu';

function App() {

  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <Router>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="App">
      <div className="sections">
        <Switch>
            <Route exact path="/" component={HomeScreen}/>
            <Route exact path="/product/:id" component={ProductScreen}/>
            <Route exact path="/cart" component={CartScreen}/>
        </Switch>  
    </div>
    </div>
    </Router>
  );
}

export default App;
