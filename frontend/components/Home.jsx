import React, { Component } from 'react'

export default class Home extends Component {

    componentDidMount() {
        document.title = "Shopping Cart"
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <br />
                <h1>Home</h1>
                <hr />
                <br></br><br /><br /><br /><br /><br />
                <button><h3><a href='/customerCreate'> Customer </a></h3></button>
                &nbsp;&nbsp;&nbsp;
                <button><h3><a href='/traderCreate'> Trader </a></h3></button>
            </div>
        )
    }
}