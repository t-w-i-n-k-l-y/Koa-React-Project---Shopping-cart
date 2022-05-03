import React, { Component } from 'react'
import axios from 'axios';

export default class Cart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cartItems: []
        };

        this.handleClickRemove = this.handleClickRemove.bind(this);
    }

    componentDidMount() {
        document.title = "Cart"
        this.retrieveItems();
    }

    retrieveItems() {
        axios.get('http://localhost:8000/cart').then(res => {
            if (res.data) {
                this.setState({
                    cartItems: res.data
                });

                // console.log(this.state.cartItems);
            }
        });
    }

    handleClickRemove(id) {
        axios.delete(`http://localhost:8000/cart/delete/${id}`).then((res) => {
            alert('Removed from cart...');

            this.retrieveItems();
        })
    }

    handleClick(id) {

        axios.get(`http://localhost:8000/items/${id}`).then((res) => {
            // console.log(res.data)
            if (res.data) {
                // console.log(this.state)
                let item = {
                    name: res.data.name,
                    description: res.data.description,
                    price: res.data.price,
                    quantity: res.data.quantity,
                    businessName: res.data.businessName
                }

                if (parseInt(item.quantity) > 0) {
                    let newQ = (parseInt(item.quantity) - 1);
                    item.quantity = newQ;

                    axios.put(`http://localhost:8000/items/update/${id}`, item)
                        .then(res => {
                            if (res) {
                                console.log('Quantity Updated successfully!');
                            }
                        })
                        .catch(err => {
                            alert('Error: ' + err);
                        })

                    alert('Thank you for your purchase!');

                    axios.get(`http://localhost:8000/customers/${localStorage.getItem('customerId')}`).then((res) => {
                        // console.log(res.data)
                        if (res.data) {

                            axios.post('http://localhost:8000/customerlist/create', {
                                firstName: res.data.firstName,
                                lastName: res.data.lastName,
                                email: res.data.email,
                                phone: res.data.phone,
                                address: res.data.address
                            })
                                .then(res => {
                                    if (res) {
                                        console.log('Added to customer list');
                                    }
                                })
                                .catch(err => {
                                    alert('Error: ' + err);
                                })

                        }
                    })

                    this.handleClickRemove(id);
                }
                else{
                    alert('Item out of stock')
                }
            }
        })
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <br />
                <h2>Cart</h2>
                <hr />
                <br />
                <table>
                    <thead>
                        <tr>
                            <th scope='col'> # </th>
                            <th scope='col'> Item </th>
                            <th scope='col'> Price </th>
                            <th scope='col'></th>
                            <th scope='col'></th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.cartItems.map((cartItems, index) => (
                            <tr key={index}>
                                <th scope='row'>{index + 1}</th>
                                <td>{cartItems.name}</td>
                                <td>{cartItems.price}</td>
                                <td>
                                    <button onClick={() => this.handleClick(cartItems.id)}>Purchase</button>
                                </td>
                                <td>
                                    <button onClick={() => this.handleClickRemove(cartItems.id)}>Remove</button>
                                </td>
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
