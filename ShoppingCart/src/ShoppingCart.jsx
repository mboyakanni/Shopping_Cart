import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
  constructor(props) {
    //console.log("constructor - ShoppingCart");
    super(props);
    this.state = {
      products: [],
    };
  }
  render() {
    //console.log("render - ShoppingCart");
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  componentDidMount = async () => {
    //console.log("componentDidMount - ShoppingCart");
    var response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    console.log(response);
    var prods = await response.json();
    console.log(prods);
    this.setState({ products: prods });
  };
  componentDidUpdate(prevProps, prevState) {
    /*console.log(
      "componentDidUpdate-ShoppingCart",
      prevProps,
      prevState,
      this.props,
      this.state
    );*/
  }
  componentWillUnmount() {
    //console.log("componentWillUnmount - ShoppingCart");
  }
  componentDidCatch(error, info) {
    //console.log("componentDidCatch - ShoppingCart");
    //console.log(error, info);
    //localStorage.lastError = `${error} \n ${JSON.stringify(info)}`;
  }
  handleIncrement = (product, maxValue) => {
    let allProducts = [...this.state.products];
    //console.log(this.handleIncrement, product)
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      this.setState({ products: allProducts });
    }
  };

  handleDecrement = (product, minValue) => {
    let allProducts = [...this.state.products];
    //console.log(this.handleIncrement, product)
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      this.setState({ products: allProducts });
    }
  };

  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (window.confirm("Are you sure to delete?")) {
      allProducts.splice(index, 1);
      this.setState({ products: allProducts });
    }
  };
}
