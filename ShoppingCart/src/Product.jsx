import React, { Component } from "react";
export default class Product extends Component {
  constructor(props) {
    //console.log("constructor - Product");
    super(props);
    this.state = {
      product: this.props.product,
    };
  }
  render() {
    //console.log("render - Product");
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">
              # {this.state.product.id}
              <span className="hand-icon">
                <i
                  className="fa fa-times fa-pull-right"
                  onClick={() => {
                    this.props.onDelete(this.state.product);
                  }}
                ></i>
              </span>
            </div>

            <h5 className="pt-2 border-top">
              {this.state.product.productName}
            </h5>
            <div>$ {this.state.product.price}</div>
            <div>
              <img
                src={this.state.product.photo}
                alt="A beautiful product"
              ></img>
            </div>
          </div>
          <div className="card-footer">
            <div className="float-start">
              <span className="badge text-dark">
                {this.state.product.quantity}
              </span>

              <div className="btn-group margin-top">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.product, 10);
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDecrement(this.state.product, 0);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <div className="float-end">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
  componentWillUnmount() {
   // console.log("componentWillUnmount-Product");
  }
  componentDidMount() {
    //console.log("componentDidMount - ShoppingCart");
  }
  componentDidUpdate(prevProps, prevState) {
    /*console.log(
      "componentDidUpdate-ShoppingCart",
      prevProps,
      prevState,
      this.props,
      this.state
    );*/
  }
}
