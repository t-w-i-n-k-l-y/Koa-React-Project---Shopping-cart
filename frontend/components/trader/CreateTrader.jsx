import axios from 'axios';
import React, { Component } from 'react'

export default class CreateTrader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            businessName: '',
            email: '',
            phone: '',
            businessAddress: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        document.title = "Trader Profile Creation"
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        let validated = true;
        if (this.state.name == '' || this.state.businessName == '' || this.state.email == '' || this.state.phone == '' || this.state.businessAddress == '' || this.state.password == '') {
            validated = false;
            alert('Please fill all the fields')
        }
        else if (this.state.phone.length != 10) {
            validated = false;
            alert('Please enter a valid mobile number')
        }
        else if (this.state.password.length < 8) {
            validated = false;
            alert('There should be at least 8 characters in the password')
        }

        if (validated) {

            const trader = {
                name: this.state.name,
                businessName: this.state.businessName,
                email: this.state.email,
                phone: this.state.phone,
                businessAddress: this.state.businessAddress,
                password: this.state.password,
            }
            // console.log(trader)

            axios.post('http://localhost:8000/traders/create', {
                name: trader.name,
                businessName: trader.businessName,
                email: trader.email,
                phone: trader.phone,
                businessAddress: trader.businessAddress,
                password: trader.password,
            })
                .then(res => {
                    if (res) {
                        alert('Registered successfully!');
                        this.setState(
                            {
                                name: '',
                                businessName: '',
                                email: '',
                                phone: '',
                                businessAddress: '',
                                password: ''
                            }
                        )
                        localStorage.setItem('traderId', res.data.id);
                        window.open('/trader');
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
                <h2>Create Profile - Trader</h2>
                <hr />
                <br />
                <form>
                    <label>Name</label> &nbsp;
                    <input value={this.state.name} onChange={this.onChange} name="name" type='text' placeholder='Enter your name' required />
                    <br /><br />
                    <label>Business Name</label> &nbsp;
                    <input value={this.state.businessName} onChange={this.onChange} name="businessName" type='text' placeholder='Enter your business name' required />
                    <br /><br />
                    <label>Email</label> &nbsp;
                    <input value={this.state.email} onChange={this.onChange} name="email" type='email' placeholder='Enter your email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                    <br /><br />
                    <label>Mobile Number</label> &nbsp;
                    <input value={this.state.phone} onChange={this.onChange} name="phone" type='text' placeholder='Enter your mobile number' pattern="[0-9]{10}" required />
                    <br /><br />
                    <label>Business Address</label> &nbsp;
                    <input value={this.state.businessAddress} onChange={this.onChange} name="businessAddress" type='text' placeholder='Enter the address' required />
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
