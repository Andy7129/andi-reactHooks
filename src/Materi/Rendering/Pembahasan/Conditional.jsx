import React from "react";

export default class Conditional extends React.Component {
    state = {
        isLoading: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            });
        }, 3000);
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? <h1>Times request timed out</h1> : <h1>Ayo udah lah ikut aja aku</h1>}
            </div>
        )
    }
}
