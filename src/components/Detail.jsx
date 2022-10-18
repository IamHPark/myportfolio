import { React, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './Detail.scss'
import Gallery from "./Gallery";
import TechBox from "./TechBox";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Detail(props) {
    const {id} = useParams();
    const project = props.projects.find( p => p.id == id);
    const navigate = useNavigate();

    const goLists = () => {
        navigate('/projects');
    }

    const scrollToDetail = useRef();

    const featureLists = project.features.map( (feature, i) =>
            <li key={i}>{feature}</li>
        )

    return (
        <>
            <h1 className="back" onClick={goLists}>BACK</h1>
            <div className="title">
                    <img src={process.env.PUBLIC_URL + project.img} className="project-img"/>
                    <h1>{project.title}</h1>
                    <h3>{project.detail}</h3>
                    <div className="mouse_scroll" onClick={() => scrollToDetail.current.scrollIntoView({ behavior: 'smooth'})}>
                            <div className="mouse">
                                <div className="wheel"></div>
                            </div>
                            <div>
                                <span className="m_scroll_arrows unu"></span>
                                <span className="m_scroll_arrows doi"></span>
                                <span className="m_scroll_arrows trei"></span>
                            </div>
                    </div>
            </div>
            <div className="project-detail" ref={scrollToDetail}>

                    <p>{project.content}</p>
                    <p>{project.test}</p>
                    <div className="link-container">
                        <a href={project.live} target="_blank" className="link">
                            <img src={process.env.PUBLIC_URL + "/img/icons/play.jpeg"} alt="github" />
                            <p>LIVE DEMO</p>
                        </a>

                        <a href={process.env.PUBLIC_URL +project.github} target={"_blank"} className="link">
                            <img src={process.env.PUBLIC_URL + "/img/icons/github.png"} alt="github" />
                            <p>GITHUB</p>
                        </a>
                    </div>
                    <img src={process.env.PUBLIC_URL + project.gif} alt="...loading" className="gif"/>
                    <div className="tech-stacks-container">
                        <h2 className="sub-heading">TECH STACK</h2>
                        <TechBox tech={project.tech}/>
                    </div>
                    <h2 className="sub-heading">FEATURES</h2>
                    <ul>{featureLists}</ul>
                    <Gallery imgs={project.imgs}/>
            </div>
        </>
    )
}