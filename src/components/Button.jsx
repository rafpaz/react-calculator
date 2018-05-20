import React, { Component } from 'react';
import operatorsList from '../data/operatorsList';

class Button extends Component {
    handleChange(){
        this.props.clickBtn(this.props.value);
    }

    render(){
        return (
            <span className={"btn btn-primary btn-calculator" + (operatorsList.indexOf(this.props.value) > -1 ? " btn-action" : "")} 
                    onClick={this.handleChange.bind(this)}>
                {this.props.value}
            </span>
        )
    }
}

export default Button;