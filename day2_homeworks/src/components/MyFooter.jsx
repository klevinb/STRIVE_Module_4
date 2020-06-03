import React from 'react'
import './MainCss.css'
import logo from '../assets/logo1.png'


const myFooter = () =>{
    return (
        <div className="container-fluid d-flex justify-content-between">
            <div className="row" id="socialMedia">
                <div className="col-12">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" width="30px" />
                    <span>Big Book</span>
                </div>
                <div className="col-12">
                    <img src="https://www.facebook.com/images/fb_icon_325x325.png" width="30px" />
                    <span>Big Book</span>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <img src={logo} height="100px"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mr-5">
                    <p>Address ~ Oslo, Norway </p>
                    <p>Email ~ getbooks.org</p>
                    <p>Phone ~ +47 466 66 666</p>
                </div>
            </div>
        </div>
    )
}

export default myFooter