import React, { Component } from 'react';
import Display from './Display';
import Button from './Button';
import buttonsList from '../data/buttonsList';
import operatorsList from '../data/operatorsList';

/**
 * Layout class is in charge of all the logic of the calculator 
 */
class Layout extends Component {
    constructor(){
        super();
        this.state = {
            display: 0,
            prevAnswer: null,
            showAnswer: false
        };
        this.operatorList = operatorsList;
        this.buttonMap = this.getButtonsMap();
        this.handleEqualsClicked = this.handleEqualsClicked.bind(this);
        this.handlePlusMinusClicked = this.handlePlusMinusClicked.bind(this);
        this.handleACClicked = this.handleACClicked.bind(this);
    }

    getButtonsMap(){
        return buttonsList.map((val)=>{return <Button btnClicked={this.btnClicked.bind(this)} key={val} value={val} />});
    }

    //Check if the last digit is an operator
    isEndWithOperator(str) {
        return (this.operatorList.indexOf(str.slice(-1)) > -1);
    }
    //Check if the first digit is an operator
    isStartWithOperator(str) {
        return (this.operatorList.indexOf(str.substr(0,1)) > -1);
    }

    btnClicked(btnVal) {
        let {display, showAnswer} = this.state;
        display = (display === 0 || showAnswer) ? '' : display;
        switch (btnVal) {
            case '=':
                this.handleEqualsClicked(btnVal);
                break;

            case 'AC':
                this.handleACClicked();
                break;

            case '+':
            case '-':
                this.handlePlusMinusClicked(btnVal);
                break; 

            default:
                this.setState({display: display + btnVal, showAnswer: false});
                break;  
        }
    }

    handleEqualsClicked(btnVal){
        let {display, prevAnswer} = this.state;
        if (this.isEndWithOperator(display)) {
            return; //skip eval
        }

        let ans;
        const replacedStr = display.replace('x','*');
        if (this.isStartWithOperator(display)) {
            ans = eval(prevAnswer + replacedStr);
        } else {
            ans = eval(replacedStr);
        }

        if (ans !== undefined) {
            this.setState({
                display: ans,
                prevAnswer: ans,
                showAnswer: true
            });
        } 
    }

    handlePlusMinusClicked(btnVal){
        let {display, prevAnswer} = this.state;
        if (this.isEndWithOperator(display)) {
            //replace last operator
            this.setState({display: display.slice(0,-1) + btnVal, showAnswer: false});
            return;
        }
        if (display !== '' || prevAnswer) {
            this.setState({display: display + btnVal, showAnswer: false});
        } 
    }

    handleACClicked(){
        this.setState({display: 0, prevAnswer: null, showAnswer: false});
    }

    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading"><Display value={this.state.display} /></div>
                <div className="panel-body">
                    {this.buttonMap}
                </div>
            </div>
        )
    }
}

export default Layout;