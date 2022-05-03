import axios from 'axios';
import React, { Component } from 'react'

export default class EditItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            price: '',
            quantity: '',
            businessName: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        document.title = "Update Items"

        const id = localStorage.getItem('itemId')
        // console.log(id)

        axios.get(`http://localhost:8000/items/${id}`).then((res) => {
            // console.log(res.data)
            if (res.data) {
                // console.log(this.state)
                this.setState({
                    name: res.data.name,
                    description: res.data.description,
                    price: res.data.price,
                    quantity: res.data.quantity,
                    businessName: res.data.businessName
                })
            }
        })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        const id = localStorage.getItem('itemId')
        // console.log(id)
        // const { name, description, price, quantity, businessName } = this.state;
        const item = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            quantity: this.state.quantity,
            businessName: this.state.businessName
        }
        // console.log(item)
        axios.put(`http://localhost:8000/items/update/${id}`, item)
            .then(res => {
                if (res) {
                    alert('Updated successfully!');

                    axios.put(`http://localhost:8000/cart/update/${id}`, item)
                        .then(res => {
                            if (res) {
                                console.log('Cart Updated successfully!');
                                axios.put(`http://localhost:8000/wishlist/update/${id}`, item)
                                    .then(res => {
                                        if (res) {
                                            console.log('WishList Updated successfully!');
                                        }
                                    })
                                    .catch(err => {
                                        alert('Error: ' + err);
                                    })
                            }
                        })
                        .catch(err => {
                            alert('Error: ' + err);
                        })
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
                <h2>Edit Item</h2>
                <hr />
                <br />
                <form>
                    <label>Item Name</label> &nbsp;
                    <input value={this.state.name} onChange={this.onChange} name="name" type='text' placeholder='' required />
                    <br /><br />
                    <label>Description</label> &nbsp;
                    <input value={this.state.description} onChange={this.onChange} name="description" type='text' placeholder='' required />
                    <br /><br />
                    <label>Price</label> &nbsp;
                    <input value={this.state.price} onChange={this.onChange} name="price" type='text' placeholder='' required />
                    <br /><br />
                    <label>Quantity</label> &nbsp;
                    <input value={this.state.quantity} onChange={this.onChange} name="quantity" type='text' placeholder='' required />
                    <br /><br />
                    <label>Business Name</label> &nbsp;
                    <input value={this.state.businessName} onChange={this.onChange} name="businessName" type='text' placeholder='' required />

                    <br /><br />
                    <button type='submit' onClick={this.onSubmit}>Update</button>
                    &nbsp;
                    <button>
                        <a href='/inventory'>Back</a>
                    </button>

                </form>
            </div>
        )
    }
}


