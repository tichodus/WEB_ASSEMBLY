import wasm from '../../../lib/calculator.cpp';
import React, { Component } from 'react';


class Calculator extends Component {
    constructor() {
        super();

        this.index = 0;
        this.state = {
            currentNumber: '',
            numbers: [0, 0],
            result: 0,
            wasmLoaded: false
        };

        wasm.initialize().then(module => {
            this.add = () => this.setState({ result: module._add(Number.parseInt(this.state.numbers[0]), Number.parseInt(this.state.numbers[1])) });
            this.div = () => this.setState({ result: module._divide(Number.parseInt(this.state.numbers[0]), Number.parseInt(this.state.numbers[1])) });
            this.mul = () => this.setState({ result: module._mul(Number.parseInt(this.state.numbers[0]), Number.parseInt(this.state.numbers[1])) });
            this.sub = () => this.setState({ result: module._sub(Number.parseInt(this.state.numbers[0]), Number.parseInt(this.state.numbers[1])) });
            this.setState({ wasmLoaded: true });
        });
    }

    setNumber() {
        let number = this.state.currentNumber;
        let numbers = this.state.numbers;
        numbers[this.index] = number;
        this.index = (this.index + 1) % 2;
        this.setState({ numbers: numbers });
        this.setState({ currentNumber: '' });
        console.log(this.state.numbers);
    }

    composeNumber(number) {
        let currentNumber = this.state.currentNumber.toString();
        this.setState({ currentNumber: currentNumber + number });
    }
    render() {
        return this.state.wasmLoaded ? this.renderTemplate() : null;
    }

    renderTemplate() {
        return (<div className='container-flex container'>
            <div className='flex-item calculator__result'>
                <input id='result' type='text' disabled value={this.state.result} />
                <span className='calculator__span'>{this.state.numbers[0]}</span>
                <span className='calculator__span'>{this.state.numbers[1]}</span>
            </div>
            
            <div className='container-flex'>
                <div className='flex-item calculator__buttons'>
                    <button onClick={() => this.composeNumber(0)} id='calculate' >0</button>
                </div>
                <div className='flex-item calculator__buttons'>
                    <button onClick={() => this.composeNumber(1)} id='calculate' >1</button>
                </div>
                <div className='flex-item calculator__buttons'>
                    <button onClick={() => this.composeNumber(2)} id='calculate' >2</button>
                </div>
                <div className='flex-item calculator__buttons'>
                    <button onClick={() => this.composeNumber(3)} id='calculate' >3</button>
                </div>
                <div className='flex-item calculator__buttons'>
                    <button onClick={() => this.composeNumber(4)} id='calculate' >4</button>
                </div>
                <div className='flex-item calculator__buttons'>
                    <button onClick={() => this.composeNumber(5)} id='calculate' >5</button>
                </div>
                <div className='flex-item calculator__buttons'>
                    <button onClick={() => this.composeNumber(6)} id='calculate' >6</button>
                </div>
                <div className='flex-item calculator__buttons'>
                    <button onClick={() => this.composeNumber(7)} id='calculate' >7</button>
                </div>
                <div className='flex-item calculator__buttons'>
                    <button onClick={() => this.composeNumber(8)} id='calculate' >8</button>
                </div>

                <div className='flex-item calculator__buttons'>
                    <button onClick={() => this.composeNumber(9)} id='calculate' >9</button>
                </div>

                <div className='flex-item calculator__buttons'>
                    <button onClick={() => this.setNumber()} id='calculate' >Set</button>
                </div>

                <div className='flex-item calculator__buttons'>
                    <button onClick={() => this.add()} id='calculate' >ADD</button>
                </div>
                <div className='flex-item calculator__buttons'>
                    <button onClick={() => this.sub()} id='calculate' >SUB</button>
                </div>
                <div className='flex-item calculator__buttons'>
                    <button onClick={() => this.mul()} id='calculate' >MUL</button>
                </div>
                <div className='flex-item calculator__buttons'>
                    <button onClick={() => this.div()} id='calculate' >DIV</button>
                </div>
            </div>
        </div>)
    }
}

export default Calculator;