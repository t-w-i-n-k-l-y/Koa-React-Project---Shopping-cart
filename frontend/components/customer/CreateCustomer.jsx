import axios from 'axios';
import React, { Component } from 'react'

export default class CreateCustomer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        document.title = "Customer Profile Creation"
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        let validated = true;
        if (this.state.firstName == '' || this.state.lastName == '' || this.state.email == '' || this.state.phone == '' || this.state.address == '' || this.state.password == '') {
            validated = false;
            alert('Please fill all the fields');
        }
        else if(this.state.phone.length != 10 ){
            validated = false;
            alert('Please enter a valid mobile number')
        }
        else if(this.state.password.length < 8){
            validated = false;
            alert('There should be at least 8 characters in the password')
        }

        if (validated) {
            const customer = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                phone: this.state.phone,
                address: this.state.address,
                password: this.state.password,
            }
            // console.log(customer)
            
            axios.post('http://localhost:8000/customers/create', {
                firstName: customer.firstName,
                lastName: customer.lastName,
                email: customer.email,
                phone: customer.phone,
                address: customer.address,
                password: customer.password,
            })
                .then(res => {
                    if (res) {
                        alert('Registered successfully!');
                        this.setState(
                            {
                                firstName: '',
                                lastName: '',
                                email: '',
                                phone: '',
                                address: '',
                                password: ''
                            }
                        )
                        localStorage.setItem('customerId', res.data.id);
                        window.open('/customer');
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
                <h2>Create Profile - Customer</h2>
                <hr />
                <br />
                <form>
                    <label>First Name</label> &nbsp;
                    <input value={this.state.firstName} onChange={this.onChange} name="firstName" type='text' placeholder='Enter your first name' required />
                    <br /><br />
                    <label>Last Name</label> &nbsp;
                    <input value={this.state.lastName} onChange={this.onChange} name="lastName" type='text' placeholder='Enter your last name' required />
                    <br /><br />
                    <label>Email</label> &nbsp;
                    <input value={this.state.email} onChange={this.onChange} name="email" type='email' placeholder='Enter your email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                    <br /><br />
                    <label>Mobile Number</label> &nbsp;
                    <input value={this.state.phone} onChange={this.onChange} name="phone" type='text' placeholder='Enter your mobile number' pattern="[0-9]{10}" required />
                    <br /><br />
                    <label>Address</label> &nbsp;
                    <input value={this.state.address} onChange={this.onChange} name="address" type='text' placeholder='Enter your address' required />
                    <br /><br />
                    <label>Password</label> &nbsp;
                    <input value={this.state.password} onChange={this.onChange} name="password" type='password' placeholder='Enter a password' pattern=".{8,}" required />

                    <br /><br />
                    <button type='submit' onClick={this.onSubmit}>Create</button>
                    &nbsp;
                    <button>
                        <a href='/'>Back</a>
                    </button>
                </form>
            </div>
        )
    }
}
