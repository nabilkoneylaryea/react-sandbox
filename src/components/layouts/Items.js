import React, { Component } from 'react'

export class Items extends Component {
    render() {
        console.log(this.props.items)
        return (
            this.props.items.map((item) => 
                // console.log(item.title)
                <div style={{color: 'white'}}>
                    <h1>{item.title}</h1>
                </div>
            )
        )
    }
}

export default Items
