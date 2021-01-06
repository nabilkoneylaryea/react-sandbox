import React, { Component } from 'react'

class SingleItem extends Component {
    style = {
        color: 'transparent',
        textAlign: 'center'
    }
    render() {
        return (
            <div className="fade-in p-3" style={this.style}>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default SingleItem
