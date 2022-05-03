import React, { Component } from 'react'

export default class Trader extends Component {

    componentDidMount() {
        document.title = "Trader"
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <br />
                <h1>Trader</h1>
                <hr />
                <br></br><br /><br /><br /><br /><br />
                <button><h3><a href='/inventory'> View Inventory </a></h3></button>
                &nbsp;&nbsp;&nbsp;
                <button><h3><a href='/itemCreate'> Add new Item </a></h3></button>
                <br /><br />
                <button><h3><a href='/allcustomers'> All Customers </a></h3></button>
                &nbsp;&nbsp;&nbsp;
                <button><h3><a href='/customerlist'> View Customer List </a></h3></button>
                <br /><br />
                <button><h3><a href='/promotionlist'> View Promotions </a></h3></button>
                &nbsp;&nbsp;&nbsp;
                <button><h3><a href='/promotionCreate'> Add new Promotion </a></h3></button>
            </div>
        )
    }
}