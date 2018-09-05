import React, {Component} from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";

class ContactData extends Component {
    state = {
        name: String,
        email: String,
        address: {
            street: String,
            postCode: String
        }
    }

    render () {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your details</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Full Name" />
                    <input className={classes.Input} type="text" name="email" placeholder="E-mail Address" />
                    <input className={classes.Input} type="text" name="street" placeholder="Street" />
                    <input className={classes.Input} type="text" name="postCode" placeholder="Post Code" />
                    <Button btnType="Success">Place Order</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;