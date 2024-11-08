import React from "react";

export default class CounterComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    incrementHandler = () => {
        this.setState({ count: this.state.count + 1 });
    };
    decrementHandler = () => {
        this.setState({
            count: this.state.count - 1,
        });
    };

    render() {
        return (
            <div className="content ">
                <h1>Counter App</h1>
                <p className="m-3">Count: {this.state.count}</p>
                <div className="buttons-count">
                    <button className="m-3" onClick={this.incrementHandler}>
                        Increment
                    </button>
                    <button className="m-3" onClick={this.decrementHandler}>
                        Decrement
                    </button>
                </div>
            </div>
        );
    }
}