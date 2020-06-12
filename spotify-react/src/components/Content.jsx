import React, { Component } from 'react';
import { Image, Col, Row } from 'react-bootstrap'
import './MainCss.css'

class Content extends Component {
    render() {
        return (
            <>
                <Col md={10} className="col-10 gray-bg" >
                    <Row className="row row-cols-xs-1" >
                        <div id="content" className="col-12 col-md-4 d-flex justify-content-end">
                            <div id="artist" className="card mt-5">
                                <Image src="/assets/8miles.jpg" style={{ height: "250px" }} />
                                <p></p>
                                <label id="label1"></label>
                                <button type="button" className="btn">PLAY</button>
                                <label id="label2"></label>
                            </div>
                        </div>
                        <div id="songs" className="col">
                            <div className="card">

                            </div>
                        </div>
                    </Row>
                </Col>
            </>
        );
    }
}

export default Content;