import React, { Component } from 'react'

export default class Customer extends Component {

    componentDidMount() {
        document.title = "Customer"
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <br />
                <h1>Customer</h1>
                <hr />
                <br></br><br /><br /><br /><br /><br />
                <button><h3><a href='/items'> View Items </a></h3></button>
                &nbsp;&nbsp;&nbsp;
                <button><h3><a href='/cart'> View Cart </a></h3></button>
                &nbsp;&nbsp;&nbsp;
                <button><h3><a href='/wishlist'> View Wishlist </a></h3></button>
                <br /><br />
                <button><h3><a href='/promotions'> Active Promotions </a></h3></button>
            </div>
        )
    }
}