import React from "react";

export default function Icons(props) {
    return (
        <div className="icons">
            <img src={process.env.PUBLIC_URL+`/img/icons/${props.icons.img}`} alt="" />
            <p>{props.icons.name}</p>
        </div>
    )
}