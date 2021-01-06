import React, { Component } from 'react'
import InputBar from './Input';

class Header extends Component {
    addItem(e){
        // console.log(e.target);
        // inputBar.classList.add('animation-expand');
        console.log(InputBar);
        // inputBar.classList.remove('animation-expand');
    }
    render() {
        return (
            <header className="bg-white m-auto p-3 text-center">
                <div className="d-flex justify-content-center">
                    <h1 id="main-header" className="ms-4 me-auto">
                        Hello World<span className="animation-blink">_</span>
                    </h1>
                    <span>
                        <InputBar addItem={this.props.addItem} />
                    </span>
                </div>
            </header>
        )
    }
}

export default Header
