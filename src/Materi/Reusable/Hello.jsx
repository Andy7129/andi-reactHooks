import React from "react";

export default class Hello extends React.Component{
    render() {
        return (
                <div>
            <h1 align="center">Harga Unit {this.props.name}</h1>
            </div>
        )
    }
}