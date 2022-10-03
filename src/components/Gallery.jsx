import React from "react";
import { useState } from "react";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './Gallery.scss'

export default function Gallery(props) {
    const [pick, setPick] = useState(0)
    console.log(pick)

    return (
        <div>
            <div>
                <img src={props.imgs[pick]} alt="" className="detail-image-big"/>
            </div>
                {props.imgs.map( (image, i) =>
                    <img src={image} alt="" className="detail-images" onClick={() => setPick(i)}/>
                )}
        </div>
    )
}