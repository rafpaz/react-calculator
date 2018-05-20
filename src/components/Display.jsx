import React, { Component } from 'react';

/**
 * Display class is responsible for the numbers display and will update on each button click
 */
class Display extends Component {
    render() {
        return (<div id="display" className="well well-sm">{this.props.value}</div>)
    }
}

export default Display;