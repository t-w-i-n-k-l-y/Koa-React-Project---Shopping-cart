import React, { Component } from 'react'
import axios from 'axios';

export default class CustomerList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customers: []
        };

    }

    componentDidMount() {
        document.title = "Customer List"
        this.retrieve();
    }
    retrieve() {
        axios.get('http://localhost:8000/customerlist').then(res => {
            if (res.data) {
                this.setState({
                    customers: res.data
                });
            }
        });
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <br />
                <h2>Customers who purchased items</h2>
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
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.customers.map((customers, index) => (
                            <tr key={index}>
                                <th scope='row'>{index + 1}</th>
                                {/* <td>{item.id}</td> */}
                                <td>{customers.firstName}&nbsp;{customers.lastName}</td>
                                <td>{customers.email}</td>
                                <td>{customers.phone}</td>
                                <td>{customers.address}</td>
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
