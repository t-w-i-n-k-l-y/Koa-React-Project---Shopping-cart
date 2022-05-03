import axios from 'axios';
import React, { Component } from 'react'

export default class EditPromotion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            businessName: '',
            promotion: '',
            description: ''

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        document.title = "Update promotion"

        const id = localStorage.getItem('promotionId')
        // console.log(id)

        axios.get(`http://localhost:8000/promotions/${id}`).then((res) => {
            // console.log(res.data)
            if (res.data) {
                // console.log(this.state)
                this.setState({
                    businessName: res.data.businessName,
                    promotion: res.data.promotion,
                    description: res.data.description
                })
            }
        })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        const id = localStorage.getItem('promotionId')
        // console.log(id)
        // const { name, description, price, quantity, businessName } = this.state;
        const item = {
            businessName: this.state.businessName,
            promotion: this.state.promotion,
            description: this.state.description
        }
        // console.log(item)
        axios.put(`http://localhost:8000/promotions/update/${id}`, item)
            .then(res => {
                if (res) {
                    alert('Updated successfully!');
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
                <h2>Edit Promotion</h2>
                <hr />
                <br />
                <form>
                    <label>Business Name</label> &nbsp;
                    <input value={this.state.businessName} onChange={this.onChange} name="businessName" type='text' placeholder='' required />
                    <br /><br />
                    <label>Promotion</label> &nbsp;
                    <input value={this.state.promotion} onChange={this.onChange} name="promotion" type='text' placeholder='' required />
                    <br /><br />
                    <label>Description</label> &nbsp;
                    <input value={this.state.description} onChange={this.onChange} name="description" type='text' placeholder='' required />
                    <br /><br />
                    <button type='submit' onClick={this.onSubmit}>Update</button>
                    &nbsp;
                    <button>
                        <a href='/promotionlist'>Back</a>
                    </button>

                </form>
            </div>
        )
    }
}


