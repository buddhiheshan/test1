import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './index.css';


const hello = 'hello waiters';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="success">
          <div className="container">
            <NavbarBrand href="/">WaiterBot System</NavbarBrand>
          </div>
        </Navbar>
        <p>{hello}</p>
      </div>
    )
  }
}

export default App;
