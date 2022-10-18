import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GoMenu from "./GoMenu";
import './Projects.scss';

export default function Projects(props){

    const navigate = useNavigate();

    const goDetail = (id) => {
        navigate(`/projects/${id}`)
    }

    return (
        <>
            <GoMenu menu={"WORKS"}/>
            <div className="works">
                {props.projects.map( (p, i) =>(
                    <div className="project" key={i} onClick={() => {goDetail(i)}}>
                        <h1 className="project-title">{p.title}</h1>
                        <img src={p.img} className="p-img"/>
                    </div>
                ))}

            </div>
        </>
    )
}