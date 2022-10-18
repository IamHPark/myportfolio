import React from "react";
import { useNavigate } from "react-router-dom";
import './GoMenu.scss'

export default function GoMenu(props) {

    const navigate = useNavigate()
    const goHome = () => {
        navigate('/')
    }

    return (
        <div className="wrap" onClick={goHome}>
            <h1 className="menu">{props.menu}</h1>
            <h1 className="home">HOME</h1>
        </div>

    )
}