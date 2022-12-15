import {Component} from "react";

export class Clock extends Component {
    state = {
        dt: new Date(),
    };
    render() {
        return <p>{this.state.dt}</p>
    }
}