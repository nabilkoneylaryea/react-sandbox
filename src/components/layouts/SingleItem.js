import React, { Component } from 'react'

class SingleItem extends Component {
    style = {
        color: 'transparent',
        textAlign: 'center'
    }
    editItem = (e) => {
        this.props.editItem(this.props.id, 'Hello');
    }
    render() {
        return (
            <div onClick={this.editItem} className="fade-in p-3" style={this.style}>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default SingleItem
