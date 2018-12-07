import React, { Component } from 'react';
import Navbar from './Navbar';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {
        id: 1,
        name: 'Laptop',
        price: 198000,
        description: 'New MAc pro'
      }
    }
  }
  render() {
    let { product } = this.state;
    return (
      <div className="container">
        <Navbar title="onlne-shopping" />
        <hr />
        <hr />

        <div>
          <h5>{product.name}</h5>
          <h6>&#8377;{product.price}</h6>
          <p>{product.description}</p>
          <button className="btn btn-sm btn-primary">buy</button>
        </div>

      </div>
    );
  }
}

export default App;
