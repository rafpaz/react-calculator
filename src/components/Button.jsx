import React, { Component } from 'react';
import operatorsList from '../data/operatorsList';

/**
 * This class is responsible for Button display and behavior (action button or regular)
 * When button is clicked, the parent function btnClicked will be triggered
 */
class Button extends Component {
    handleChange(){
        this.props.btnClicked(this.props.value);
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