import React, { Component } from 'react';
import './intro.css';

class Intro extends Component {
    constructor() {
        super();
        this.state = {
            customers: []
        };
    }

    componentDidMount() {
        fetch('/api/customers')
            .then(res => res.json())
            .then(customers => this.setState({ customers }, () => console.log('Customers fetched...', customers)));
    }

    render() {
        return (
            <div>
               
            </div>
        );
    }
}

export default Intro;
