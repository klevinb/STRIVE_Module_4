import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import logo from '../assets/logo.png'
import './MainCss.css'

const myJumbotron = () => {
    return (
        <Jumbotron>
            <div>
                <h1>Welcome BookLovers</h1>
                <p>
                    Here you can find any book that was ever created!
                </p>
                <p>
                    <Button variant="danger">Get a 20% OFF cupon</Button>
                </p>
            </div>
            <div>
                <img src={logo} alt="logo" />
            </div>
        </Jumbotron>
    )
}

export default myJumbotron