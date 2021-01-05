import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <header className="bg-white m-auto p-3 text-center">
                <div className="d-flex justify-content-center">
                    <h1 className="flex-fill">Hello World<span className="animation-blink">_</span></h1>
                    <button type="button" className="btn btn-outline-dark rounded-circle m-auto" onClick="addItem">+</button>
                </div>
                <script>
                    
                </script>
            </header>
        )
    }
}

export default Header
