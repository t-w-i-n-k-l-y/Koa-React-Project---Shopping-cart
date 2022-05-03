import axios from 'axios';
import React, { Component } from 'react'

export default class AllCustomers extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customers: []
        };

    }

    componentDidMount() {
        document.title = "All Customers"
        this.retrieveItems();
    }
    retrieveItems() {
        axios.get('http://localhost:8000/customers').then(res => {
            if (res.data) {
                this.setState({
                    customers: res.data
                });

                // console.log(this.state.customers);
            }
        });
    }

    render() {
        return (

            <div style={{ textAlign: 'center' }}>
                <br />
                <h2>All Customers</h2>
                <hr />
                <br />
                <table>
                    <thead>
                        <tr>
                            <th scope='col'> # </th>
                            <th scope='col'> Name </th>
                            <th scope='col'> Email </th>
                            <th scope='col'> Mobile Number </th>
                            <th scope='col'> Address </th>
                            <th scope='col'> Registered Date </th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.customers.map((customer, index) => (
                            <tr key={index}>
                                <th scope='row'>{index + 1}</th>
                                <td>{customer.firstName}&nbsp;{customer.lastName}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.address}</td>
                                <td>{customer.lastModifiedDate}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
                <br />
                <button>
                    <a href='/trader'>Go back to home</a>
                </button>
            </div>
        )
    }
}
