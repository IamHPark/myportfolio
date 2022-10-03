import React from "react";
import './TechBox.scss'

export default function TechBox(props) {
    console.log(props.tech)
    const techList = props.tech.map( (tech, i) =>
            <div className="tech-box" key={i}>{tech}</div>
        )

    return (
        <div className="tech-stacks">
            {techList}
        </div>
    )
}