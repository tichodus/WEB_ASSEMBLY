import React, { Component } from 'react';
import Calculator from './calculator/calculator.component';
class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Calculator />
            </div>
        )
    }
}

export default App;