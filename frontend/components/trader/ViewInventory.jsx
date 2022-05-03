import axios from 'axios';
import React, { Component } from 'react'

export default class ViewInventory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    componentDidMount() {
        document.title = "Inventory"
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

    handleClick(id) {
        // console.log(id);
        // ItemTracker.setItemId(id);
        localStorage.setItem("itemId", id)
        window.location.replace(`/editItem/${id}`);

    }

    handleClickDelete(id) {
        axios.delete(`http://localhost:8000/items/delete/${id}`)
            .then((res) => {
                alert('Deleted successfully!');

                axios.delete(`http://localhost:8000/cart/delete/${id}`)
                .then((res) => {
                    console.log('Deleted from carts successfully!');

                    axios.delete(`http://localhost:8000/wishlist/delete/${id}`)
                        .then((res) => {
                            console.log('Deleted from wishlist successfully!');

                        })
                })

                this.retrieveItems();
            })
    }

    render() {
        return (

            <div style={{ textAlign: 'center' }}>
                <br />
                <h2>Inventory</h2>
                <hr />
                <br />
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
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.items.map((items, index) => (
                            <tr key={index}>
                                <th scope='row'>{index + 1}</th>
                                <td>{items.id}</td>
                                <td>{items.name}</td>
                                <td>{items.description}</td>
                                <td>{items.price}</td>
                                <td>{items.quantity}</td>
                                <td>{items.businessName}</td>
                                <td>
                                    {/* <a href={`/editItem/${items.id}`}>
                                        Edit
                                    </a> */}
                                    <button onClick={() => this.handleClick(items.id)}>Edit</button>

                                    &nbsp;

                                    <button onClick={() => this.handleClickDelete(items.id)}>Delete</button>
                                </td>
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
