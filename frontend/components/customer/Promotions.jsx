import axios from 'axios';
import React, { Component } from 'react'

export default class Promotions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    componentDidMount() {
        document.title = "Active Promotions"
        this.retrieveItems();
    }
    retrieveItems() {
        axios.get('http://localhost:8000/promotions').then(res => {
            if (res.data) {
                this.setState({
                    items: res.data
                });

                // console.log(this.state.items);
            }
        });
    }

    render() {
        return (

            <div style={{ textAlign: 'center' }}>
                <br />
                <h2>Active Promotions</h2>
                <hr />
                <br />
                <table>
                    <thead>
                        <tr>
                            <th scope='col'> # </th>
                            <th scope='col'> Business Name </th>
                            <th scope='col'> Promotion </th>
                            <th scope='col'> Description </th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.items.map((items, index) => (
                            <tr key={index}>
                                <th scope='row'>{index + 1}</th>
                                <td>{items.businessName}</td>
                                <td>{items.promotion}</td>
                                <td>{items.description}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
                <br />
                <button>
                    <a href='/customer'>Go back to home</a>
                </button>
            </div>
        )
    }
}


