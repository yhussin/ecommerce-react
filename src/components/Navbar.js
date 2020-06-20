import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar bg-dark">
                <Link to="/">Home</Link>
                <Link to="/details">Details</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        )
    }
}