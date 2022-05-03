import axios from 'axios';
import React, { Component } from 'react'

export default class WishList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            wishlistItems: []
        };
        this.handleClickRemove = this.handleClickRemove.bind(this);
    }

    componentDidMount() {
        document.title = "Wish List"
        this.retrieveItems();
    }

    retrieveItems() {
        axios.get('http://localhost:8000/wishlist').then(res => {
            if (res.data) {
                this.setState({
                    wishlistItems: res.data
                });

                // console.log(this.state.wishlistItems);
            }
        });
    }

    handleClickRemove(id) {
        axios.delete(`http://localhost:8000/wishlist/delete/${id}`).then((res) => {
            alert('Removed from wishlist...');

            this.retrieveItems();
        })
    }

    addToCart(id, item) {
        
        axios.post('http://localhost:8000/cart/create', item)
            .then(res => {
                if (res) {
                    alert('Added to cart successfully!');
                    this.handleClickRemove(id)
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
                <h2>Wish List</h2>
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
                        {this.state.wishlistItems.map((wishlistItems, index) => (
                            <tr key={index}>
                                <th scope='row'>{index + 1}</th>
                                <td>{wishlistItems.name}</td>
                                <td>{wishlistItems.price}</td>
                                <td>
                                    <button onClick={() => this.addToCart(wishlistItems.id, wishlistItems)}>
                                        &nbsp;Add to Cart
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => this.handleClickRemove(wishlistItems.id)}>Remove</button>
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
