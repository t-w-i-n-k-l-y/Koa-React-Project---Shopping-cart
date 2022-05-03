import axios from 'axios';
import React, { Component } from 'react'

export default class PromotionList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    componentDidMount() {
        document.title = "Active Promotions"
        this.retrieveItems();
    }
    retrieveItems() {
        axios.get('http://localhost:8000/promotions').then(res => {
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
        localStorage.setItem("promotionId", id)
        window.location.replace(`/editPromotion/${id}`);

    }

    handleClickDelete(id) {
        axios.delete(`http://localhost:8000/promotions/delete/${id}`)
            .then((res) => {
                alert('Deleted successfully!');

                this.retrieveItems();
            })
    }

    render() {
        return (

            <div style={{ textAlign: 'center' }}>
                <br />
                <h2>Active Promotions</h2>
                <hr />
                <br />
                <table>
                    <thead>
                        <tr>
                            <th scope='col'> # </th>
                            <th scope='col'> Business Name </th>
                            <th scope='col'> Promotion </th>
                            <th scope='col'> Description </th>
                            <th scope='col'></th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.items.map((items, index) => (
                            <tr key={index}>
                                <th scope='row'>{index + 1}</th>
                                <td>{items.businessName}</td>
                                <td>{items.promotion}</td>
                                <td>{items.description}</td>
                                <td>
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

