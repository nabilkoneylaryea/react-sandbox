import React, { Component } from 'react';
import Item from './SingleItem';

export class Items extends Component {
    render() {
        // console.log(this.props.items)
        return (
            this.props.items.map(item => 
                // console.log(item.title)

                <div>
                    <Item key={item.id} id={item.id} title={item.title} editItem={this.props.editItem} deleteItem={this.props.deleteItem}/>
                </div>
            )
        )
    }
}

export default Items
