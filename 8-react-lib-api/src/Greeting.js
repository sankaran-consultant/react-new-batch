
import React, { Component } from 'react';

import PropTypes from 'prop-types'

class Greeting extends Component {
    constructor(props) {
        super(props)
        console.log("Greeting::constructor");
    }
    render() {
        console.log("Greeting::render");
        let { message } = this.props;
        return (
            <div className="alert alert-info">
                <p>{message}</p>
                <hr />
                <p>{new Date().toLocaleTimeString()}</p>
            </div>
        );
    }
}

Greeting.propTypes = {
    message: PropTypes.string,
}
Greeting.defaultProps = {
    message: "Hello World!"
}

export default Greeting;