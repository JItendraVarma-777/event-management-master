import React, { Component } from 'react';
import RegService from '../reusable/RegService';
class ListRegisteredUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
    this.deleteUser = this.deleteUser.bind(this);
  }
  deleteUser(id) {
    RegService.deleteUser(id).then((res) => {
      this.setState({ user: this.state.user.filter((user) => user.id !== id) });
      this.props.history.push('/events/user');
    });
  }
  componentDidMount() {
    RegService.getAllUsers().then((res) => {
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      <div className="container-fluid table-responsive">
        <h2 className="text-center text-white my-4">USERS</h2>
        <table className="table table-light table-striped">
          <thead>
            <tr>
              <th> First Name</th>
              <th> Last Name</th>
              <th> Address</th>
              <th> City</th>
              <th> State</th>
              <th> Age</th>
              <th> EmailId</th>
              <th> MobileNo</th>
              <th> Adults Count</th>
              <th> Child Count</th>
              <th> Food</th>
              <th>visitors names</th>
              <th> Total Amount</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.user.map((user) => (
              <tr key={user.id}>
                <td> {user.firstName}</td>
                <td> {user.lastName}</td>
                <td> {user.address}</td>
                {/* <td>{user.eventName}</td> */}
                <td> {user.city}</td>
                <td> {user.state}</td>
                <td> {user.age}</td>
                <td> {user.email}</td>
                <td> {user.phoneNo}</td>
                <td> {user.adultsCount}</td>
                <td> {user.childCount}</td>
                <td> {user.food}</td>
                <td> {user.visitorsNames}</td>
                <td> {user.totalPrice}</td>
                <td>
                  <button
                    onClick={() => this.deleteUser(user.id)}
                    className="btn btn-info"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ListRegisteredUsers;
