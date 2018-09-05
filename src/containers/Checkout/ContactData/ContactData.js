import React, {Component} from "react";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
    state = {
        name: String,
        email: String,
        address: {
            street: String,
            postCode: String
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true})
        const order = {
            //dummy data
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Michael Ly",
                address: {
                    street: "abc street",
                    postCode: "e02 4fn",
                    city: "London",
                    country: "United Kingdom"
                },
                email: "m@mail.com"
            },
            deliveryMethod: "Express"
        }
        axios.post("/orders.json", order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({loading: false});
                console.log(error);
            });
    }

    render () {
        let form = (
            <form>
                    <Input inputtype="input" type="text" name="name" placeholder="Full Name" />
                    <Input inputtype="input" type="text" name="email" placeholder="E-mail Address" />
                    <Input inputtype="input" type="text" name="street" placeholder="Street" />
                    <Input inputtype="input" type="text" name="postCode" placeholder="Post Code" />
                    <Button clicked={this.orderHandler} btnType="Success">Place Order</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your details</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;