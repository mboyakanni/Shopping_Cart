import React from "react";
import { Component } from "react";
export default class CustomersList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Mubarak",
        phone: "123-456",
        address: { city: "New York" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "John",
        phone: "243-856",
        address: { city: "London" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 3,
        name: "Ridwan",
        phone: "625-386",
        address: { city: "Lagos" },
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 4,
        name: "Mason",
        phone: "",
        address: { city: "Cairo" },
        photo: "https://picsum.photos/id/1013/60",
      },
      {
        id: 5,
        name: "Adiva",
        phone: "",
        address: { city: "Ikeja" },
        photo: "https://picsum.photos/id/1014/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary m-2">
            {this.state.customersCount}
          </span>
          <button onClick={this.onRefreshClick} className="btn btn-info">
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };
  getPhoneToRender = (phone) => {
    return phone ? (
      phone
    ) : (
      <div className="bg-warning p-2 text-center">No Phone</div>
    );
  };
  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="A beautiful person"></img>
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
  onChangePictureClick = (cust, index) => {
    //console.log(cust);
    //console.log(index)
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/104/60";
    this.setState({ customers: custArr });
  };
}
