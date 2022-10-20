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
                if (window.scrollY >= 1000) {
                    setScroll({
                        ...scroll,
                        intro: true
                    });
                }
                if (window.scrollY >= 1500) {
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
                        <p>
                        I am Heesoo Park, a versatile web developer who is well-versed in front-end, back-end as well as interactive web design. While everyone was isolated in their own space for the past few years, a lot of web services that helped people to connect intrigued me. That is when I decided to dive into the IT industry. I studied by myself through Freecodecamp and Codingapple and practiced hands-on programming skills at Lighthouse Labs Bootcamp web development diploma program.

With a strong knowledge of Javascript along with HTML, CSS and SQL, I have experience building projects in a team using React.js, Node.js, PostgreSQL and Socket. I.O. Also, I am able to utilize Figma for web design and have basic knowledge of Abode Illustrator. In addition to the web and design foundation, I worked as a financial advisor and marketing specialist at a bank for 5 years. With strong organizational skills and time management skills, I implemented marketing strategies and organized events with tight deadlines which placed my company 1st place among 4,000 other federations.

If you are interested in my background and what I experienced, please check my resume below. I always would love to connect with you.
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