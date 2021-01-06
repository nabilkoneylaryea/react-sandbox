import React, { Component } from 'react'

class SingleItem extends Component {
    style = {
        color: 'white',
        textAlign: 'center'
    }
    render() {
        return (
            <div style={this.style}>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default SingleItem
