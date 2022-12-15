import React, {Component} from "react";
import {StringsList} from "./StringsList";

export class NumberList extends Component {
    state = {
        numbers: [1],
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {

            this.setState(prev => {
                return {
                    numbers: [...prev.numbers, prev.numbers.length + 1],
                }
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return <StringsList list={this.state.numbers}/>;
    }
}