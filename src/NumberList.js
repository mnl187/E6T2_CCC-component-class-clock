import React, {Component} from "react";
import {StringsList} from "./StringsList";

export class NumberList extends Component {
    state = {
        numbers: [1],
    };

    render() {
        return <StringsList list={this.state.numbers}/>;
    }
}