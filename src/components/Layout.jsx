import React, { Component } from 'react';
import Display from './Display';
import Button from './Button';

class Layout extends Component {
    constructor(){
        super();
        this.state = {
            display: 0,
            lastAns: null,
            getAnsClicked: false
        };
        this.operatorList = ['+','-'];
        this.buttonMap = [
            '7',  '8', '9',  '+',
            '4',  '5', '6',  '-',
            '1',  '2', '3',  '=',
            'AC', '0','.'
        ].map((val)=>{return <Button clickBtn={this.clickBtn.bind(this)} key={val} value={val} />});
    }

    isEndWithOperator(str) {
        return (this.operatorList.indexOf(str.slice(-1)) > -1);
    }

    isStartWithOperator(str) {
        return (this.operatorList.indexOf(str.substr(0,1)) > -1);
    }

    clickBtn(btnVal) {
        let {display, lastAns, getAnsClicked} = this.state;
        display = (display === 0 || getAnsClicked)? '' : display;
        switch (btnVal) {
            case '=':
                if (this.isEndWithOperator(display)) {
                    break; //skip eval
                }

                let ans;
                const replacedStr = display.replace('x','*');
                if (this.isStartWithOperator(display)) {
                    ans = eval(lastAns + replacedStr);
                } else {
                    ans = eval(replacedStr);
                }
        
                if (ans !== undefined) {
                    this.setState({
                        display: ans,
                        lastAns: ans,
                        getAnsClicked: true
                    });
                } 
                break;

                case 'AC':
                    this.setState({display: 0, lastAns: null, getAnsClicked: false});
                    break;

                case '+':
                case '-':
                    if (this.isEndWithOperator(display)) {
                        //replace last operator
                        this.setState({display: display.slice(0,-1) + btnVal, getAnsClicked: false});
                        break;
                    }
                    if (display !== '' || lastAns) {
                        this.setState({display: display + btnVal, getAnsClicked: false});
                    } 
                    break; 

                default:
                    this.setState({display: display + btnVal, getAnsClicked: false});
                    break;  
        }
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