import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        {
          id: 1,
          name: 'Laptop',
          price: 198000,
          description: 'New MAC pro',
          canBuy: true,
          image: 'images/Laptop.png'
        },
        {
          id: 2,
          name: 'Mobile',
          price: 18000,
          description: 'New  pro',
          canBuy: true,
          image: 'images/Mobile.png'
        }
      ]
    }
  }



  renderProducts() {
    let { products } = this.state;
    return products.map((item, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <Product value={item} />
        </div>
      )
    })
  }

  render() {
    return (
      <div className="container">
        <Navbar title="onlne-shopping" />
        <hr />
        <i className="fa fa-shopping-cart"></i> &nbsp; 
        <span className="badge badge-dark">0</span> item(s) in cart
        <hr />
        {this.renderProducts()}
      </div>
    );
  }
}

export default App;
