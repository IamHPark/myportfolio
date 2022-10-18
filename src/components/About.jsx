import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./About.scss"
import ScrollTrigger from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import Icons from "./Icons";
import { icons } from "../data";
import { duration } from "moment";
import GoMenu from "./GoMenu";



export default function About(){

    const [scroll, setScroll] = useState(
        {
            img: false,
            intro: false,
            tech: false
        }
    );
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/')
    }


    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY >= 400) {
                setScroll({
                    ...scroll,
                    img: true
                })
                if (window.scrollY >= 1200) {
                    setScroll({
                        ...scroll,
                        intro: true
                    });
                }
                if (window.scrollY >= 2000) {
                    setScroll({
                        ...scroll,
                        tech: true
                    })
                }
            } else {
                setScroll({
                    img: false,
                    intro: false,
                    tech: false
                })
            }
        }
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <>
            <GoMenu menu={"ABOUT"} />
            <div className="about">
                <div className="about-phrase">
                    {/* <h1>I Love to code <br /> */}
                    {/* And design.</h1> */}
                    <svg className="svg-1"><text x="0" y="150">I Love to code</text></svg>
                    <svg className="svg-2"><text x="0" y="150">And design</text></svg>
                </div>
                <img src={process.env.PUBLIC_URL + "/img/heesoo.jpg"} alt="" className={`about-img ${scroll.img ? 'active' : ''}`}/>
                <div className={`about-me ${scroll.intro ? 'active' : ''}`}>

                    <div className="about-content">
                        <h1>Hi there,<br />
                        My name is Heesoo.</h1>
                        <br />
                        <p>an enthusiastic full-stack web developer based on business and education background. With the years of experience as a banker and a marketing specialist, "Take a walk in your customer's shoe" is my priority to pursue in working. As a developer, what I am after is becoming a user-centered developer who thinks in users' perspective and provides user-friendly design and development.
                            With a solid understanding of Javascript, HTML, CSS and SQL, I also have project experiences with React.js, Node.js and Socket.I.O. Please check m y projects to learn more about What I experienced.
                        </p>
                        <a href={process.env.PUBLIC_URL + "/img/resume.pdf"} target="_blank" className="resume_link">Check My Resume</a>
                    </div>


                </div>

                <div className={`skill-info ${scroll.tech ? 'active' : ''}`}>
                    <h1>What I Can Do</h1>
                    <div className="tech-skills">
                        {icons.map( e => <Icons icons={e}/>)}
                    </div>
                </div>
                {/* <div className="education-info">
                    <h1>Education Work Background</h1>

                </div> */}
            </div>
        </>
   )

}