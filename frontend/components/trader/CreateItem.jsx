import axios from 'axios';
import React, { Component } from 'react'

export default class CreateItem extends Component {

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
        document.title = "Add Items"
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        let validated = true;
        if (this.state.name == '' || this.state.description == '' || this.state.price == '' || this.state.quantity == '' || this.state.businessName == '') {
            validated = false;
            alert("Please fill all fields")
            
        }
        else if(parseFloat(this.state.price) < 0.0 || isNaN(parseFloat(this.state.price))){
            validated = false;
            alert('Please enter a valid price');
        }
        else if(parseInt(this.state.quantity) < 0){
            validated = false;
            alert('Please enter a valid quantity')
        }
        // console.log(parseInt(this.state.quantity))
        // console.log(parseFloat(this.state.price))
        

        if (validated) {

            const item = {
                name: this.state.name,
                description: this.state.description,
                price: this.state.price,
                quantity: this.state.quantity,
                businessName: this.state.businessName
            }
            // console.log(item)

            axios.post('http://localhost:8000/items/create', item)
                .then(res => {
                    if (res) {
                        alert('Added successfully!');
                        this.setState(
                            {
                                name: '',
                                description: '',
                                price: '',
                                quantity: '',
                                businessName: ''
                            }
                        )
                        window.open('/inventory');
                    }
                })
                .catch(err => {
                    alert('Error: ' + err);
                })
        }
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <br />
                <h2>Add New Item</h2>
                <hr />
                <br />
                <form>
                    <label>Item Name</label> &nbsp;
                    <input value={this.state.name} onChange={this.onChange} name="name" type='text' placeholder='Enter your item name' required />
                    <br /><br />
                    <label>Description</label> &nbsp;
                    <input value={this.state.description} onChange={this.onChange} name="description" type='text' placeholder='Enter item description' required />
                    <br /><br />
                    <label>Price</label> &nbsp;
                    <input value={this.state.price} onChange={this.onChange} name="price" type='text' placeholder='Enter the price of a unit' pattern="[0-9]+" required />
                    <br /><br />
                    <label>Quantity</label> &nbsp;
                    <input value={this.state.quantity} onChange={this.onChange} name="quantity" type='number' placeholder='Enter the available quantity' required />
                    <br /><br />
                    <label>Business Name</label> &nbsp;
                    <input value={this.state.businessName} onChange={this.onChange} name="businessName" type='text' placeholder='Enter business name' required />

                    <br /><br />
                    <button type='submit' onClick={this.onSubmit}>Add</button>
                    &nbsp;
                    <button>
                        <a href='/trader'>Go back to home</a>
                    </button>
                </form>
            </div>
        )
    }
}
