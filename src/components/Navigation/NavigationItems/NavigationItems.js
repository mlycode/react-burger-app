import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
       {props.isAuthenticated ? <NavigationItem link="/auth">Logout</NavigationItem> : <NavigationItem link="/auth">Sign up/Sign in</NavigationItem>}  
    </ul>
);

export default navigationItems;