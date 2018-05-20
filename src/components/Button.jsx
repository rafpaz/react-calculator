import React, { Component } from 'react';

class Button extends Component {
    handleChange(){
        this.props.clickBtn(this.props.value);
    }

    render(){
        return (
            <span className="btn btn-primary btn-calculator" onClick={this.handleChange.bind(this)}>{this.props.value}</span>
        )
    }
}

export default Button;