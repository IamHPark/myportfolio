import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Projects.scss';

export default function Projects(props){

    const navigate = useNavigate();

    const goDetail = (id) => {
        navigate(`/projects/${id}`)
    }
    const goHome = () => {
        navigate('/')
    }

    return (
        <>
            <div className="wrap" onClick={goHome}>
                <h1 className="menu">WORKS</h1>
                <h1 className="home">HOME</h1>
            </div>
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