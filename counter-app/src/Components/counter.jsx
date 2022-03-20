import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return(
            <React.Fragment>//Using fragment instead of div.
                <h1>Hello world</h1>
                <button>Increment</button>
            </React.Fragment>
        )
    }
}
 
export default Counter;