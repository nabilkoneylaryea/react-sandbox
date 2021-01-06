import React, { Component } from 'react';
import {v4} from 'uuid';

class Input extends Component {
    state = {
        input: ''
    }
    onChange = (e) => {
        this.setState(state => ({
            input: e.target.value
        }))
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.input);
        const newItem = {
            id: v4(),
            title: this.state.input
        }
        this.props.addItem(newItem);
        this.setState(state => ({
            input: ''
        }))
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} className="m-auto d-inline">
                <div className="input-group rounded-pill">
                    <input name="input" className="p-2" type="text" onChange={this.onChange} placeholder="Add Item..." value={this.state.input}/>
                    <button type="submit" className="btn btn-outline-dark">+</button>
                </div>
            </form>
        )
    }
}

export default Input
