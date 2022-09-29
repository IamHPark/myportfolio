import React from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Main () {
    const [text, setText] = useState(['HELLO', "I AM", "HEESOO."])

    const changeText = (str,i) => {
        const copy = [...text]
        copy[i] = str;
        setText(copy);
      }

    const backText = () => {
        setText(['HELLO', "I AM", "HEESOO."])
      }


    return (
        <div className='main'>
            <Link to="/about" className='main-text' onMouseOver={() => {changeText("ABOUT", 0)}} onMouseOut={backText}>{text[0]}</Link>
            <Link to="/projects" className='main-text' onMouseOver={() => {changeText("PROJECTS", 1)}} onMouseOut={backText}>{text[1]}</Link>
            <a href="resume.pdf" target="_blank" className='main-text' onMouseOver={() => {changeText("CONTACT", 2)}} onMouseOut={backText}>{text[2]}</a>
        </div>
    )
}