import axios from 'axios';
import React, { Component } from 'react'

export default class ViewItems extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
        this.addToCart = this.addToCart.bind(this);
        this.addtoWishList = this.addtoWishList.bind(this);

    }

    componentDidMount() {
        document.title = "Items"
        this.retrieveItems();
    }
    retrieveItems() {
        axios.get('http://localhost:8000/items').then(res => {
            if (res.data) {
                this.setState({
                    items: res.data
                });

                // console.log(this.state.items);
            }
        });
    }
    
    addToCart(id, item) {
        
        axios.post('http://localhost:8000/cart/create', item)
            .then(res => {
                if (res) {
                    alert('Added to cart successfully!');
                }
            })
            .catch(err => {
                alert('Error: ' + err);
            })


    }

    addtoWishList(id, item) {

        axios.post('http://localhost:8000/wishlist/create', item)
            .then(res => {
                if (res) {
                    alert('Added to Wishlist successfully!');
                }
            })
            .catch(err => {
                alert('Error: ' + err);
            })
    }

    render() {
        return (

            <div style={{ textAlign: 'center' }}>
                <br />
                <h2>Items</h2>
                <hr />
                <br />
                <button><a href='/wishlist'> Wish List </a></button>
                &nbsp;&nbsp;&nbsp;
                <button><a href='/cart'> Cart </a></button>
                <br /><br />
                <table>
                    <thead>
                        <tr>
                            <th scope='col'> # </th>
                            <th scope='col'> ID </th>
                            <th scope='col'> Item </th>
                            <th scope='col'> Description </th>
                            <th scope='col'> Price </th>
                            <th scope='col'> Quantity </th>
                            <th scope='col'> Business Name </th>
                            <th scope='col'></th>
                            <th scope='col'></th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.items.map((item, index) => (
                            <tr key={index}>
                                <th scope='row'>{index + 1}</th>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.businessName}</td>
                                <td>
                                    <button onClick={() => this.addToCart(item.id, item)}>
                                        &nbsp;Add to Cart
                                    </button>
                                </td>

                                <td>
                                    <button onClick={() => this.addtoWishList(item.id, item)}>
                                        &nbsp;Add to WishList
                                    </button>
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
