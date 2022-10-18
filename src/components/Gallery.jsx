import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import { useState } from "react";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import './Gallery.scss'

export default function Gallery(props) {
    const [pick, setPick] = useState(0)

    return (
        <div className="project-detail-gallery">
            <div>
                <img src={ process.env.PUBLIC_URL + props.imgs[pick]} alt="" className="detail-image-big"/>
            </div>
                {props.imgs.map( (image, i) =>
                    <img src={ process.env.PUBLIC_URL + image} alt="" className="detail-images" onClick={() => setPick(i)} key={i}/>
                )}
        </div>
    )
}