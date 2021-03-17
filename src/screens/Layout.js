import React, { Component } from 'react'
import Header from '../components/Header'

export class Layout extends Component {
    render() {
        return (
            <>
                <Header />
                {this.props.children}
            </>
        )
    }
}

export default Layout
