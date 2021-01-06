import React, { Component } from 'react'
import Input from './Input';

class SingleItem extends Component {
    style = {
        color: 'transparent',
        textAlign: 'center'
    }
    editItem = (e) => {
        const input = document.querySelector('#input-bar');
        const inputGroup = document.querySelector('#input-group');
        if(input.value !== ''){
            this.props.editItem(this.props.id, input.value);
        }
        else{
            if (inputGroup.className.includes('shake')){
                inputGroup.classList.remove('shake');
                setTimeout(() => inputGroup.classList.add('shake'), 100);
            }
            else{
                inputGroup.classList.add('shake');
            }
        }
        
    }
    deleteItem = () => {
        this.props.deleteItem(this.props.id);
    }
    render() {
        return (
            <div className="item fade-in p-3" style={this.style}>
                <h1>{this.props.title}</h1>
                <div onClick={this.deleteItem} className="fade-in btn btn-outline-danger rounded-pill m-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                    Delete
                </div>
                <div onClick={this.editItem} className="fade-in btn btn-outline-primary rounded-pill">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>
                    Edit
                </div>
            </div>
        )
    }
}

export default SingleItem
