import './App.css';
import Header from './components/layouts/Header';
import Items from './components/layouts/Items';
import {v4} from 'uuid';
import React, { Component } from 'react';

class App extends Component {
  state = {
    items: [
      {
        id: v4(),
        title: 'Hello'
      },
      {
        id: v4(),
        title: 'World'
      },
      {
        id: v4(),
        title: 'How'
      },
      {
        id: v4(),
        title: 'Are'
      },
      {
        id: v4(),
        title: 'You'
      },
      {
        id: v4(),
        title: 'Doing'
      },
      {
        id: v4(),
        title: 'Today'
      },
    ]
  }
  // ADD ITEM
  addItem = (item) => {
    // this.state.items.unshift(item);
    this.setState(state => ({
      items: [...this.state.items, item]
    }))
  }
  // EDIT ITEM
  editItem = (id, newTitle) => {
    const newItems = this.state.items.map(item => {
      if(item.id === id){
        item.title = newTitle
      }
      return item;
    })
    this.setState(state => ({
      items: newItems
    }))
  }
  render() {
    return (
      <div>
        <Header addItem={this.addItem}/>
        <div className="mt-2 p-3 row row-cols-3 g-4">
          <Items items={this.state.items} editItem={this.editItem}/>
        </div>
      </div>
    )
  }
}

export default App;
