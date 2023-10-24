import React from "react";
import Bar from "./Bar";
import Product from "./Product";
import Hello from "./Hello"

export default class Reusable extends React.Component {

    state = {
        value : 0
    }

    handleValue = (data) => {
    this.setState ({
        value:data
    });
}
    render (){
        return(
            <div>
                <Hello  />
                <Bar value={this.state.value} />
                <Product receiveValue={this.handleValue}/>
            </div>
        )
    }
}