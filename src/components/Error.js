import React from "react";

export default class Error extends React.Component {
    render () {
        return (
            <div>
                Error: {this.props.message}
            </div>
        )
    }
}