import React, { Component } from 'react'

class Input extends Component {
    render() {
        return (
            <form onSubmit={this.onSubmit} className="m-auto d-inline">
                <div className="input-group rounded-pill">
                    <input id="add-item" className="p-2" type="text" placeholder="Add Item..."/>
                    <button type="submit" className="btn btn-outline-dark" onClick={this.addItem}>+</button>
                </div>
            </form>
        )
    }
}

export default Input
