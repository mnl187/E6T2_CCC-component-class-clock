import React from "react";
import './App.css';

export const StringsList = (props) => {
    const string = props.list.join(', ');

    return <>
        <p>{string}</p>
    </>;
}
