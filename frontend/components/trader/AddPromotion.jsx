import axios from 'axios';
import React, { Component } from 'react'

export default class AddPromotion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            businessName: '',
            promotion: '',
            description: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        document.title = "Add Promotions"
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        let validated = true;
        if (this.state.promotion == '' || this.state.description == '' || this.state.businessName == '') {
            validated = false;
            alert("Please fill all fields")
        }

        if (validated) {

            const item = {
                businessName: this.state.businessName,
                promotion: this.state.promotion,
                description: this.state.description
            }
            // console.log(item)

            axios.post('http://localhost:8000/promotions/create', {
                businessName: item.businessName,
                promotion: item.promotion,
                description: item.description
            })
                .then(res => {
                    if (res) {
                        alert('Added successfully!');
                        this.setState(
                            {
                                promotion: '',
                                description: '',
                                businessName: ''
                            }
                        )
                        window.open('/promotionlist');
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
                <h2>Add Promotion</h2>
                <hr />
                <br />
                <form>
                    <label>Business Name</label> &nbsp;
                    <input value={this.state.businessName} onChange={this.onChange} name="businessName" type='text' placeholder='Enter your business name' required />
                    <br /><br />
                    <label>Promotion</label> &nbsp;
                    <input value={this.state.promotion} onChange={this.onChange} name="promotion" type='text' placeholder='Enter your item name' required />
                    <br /><br />
                    <label>Description</label> &nbsp;
                    <input value={this.state.description} onChange={this.onChange} name="description" type='text' placeholder='Enter item description' required />
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
