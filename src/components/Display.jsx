import React, { Component } from 'react';


class Display extends Component {
    render() {
        return (<div id="display" className="well well-sm">{this.props.value}</div>)
    }
}

export default Display;