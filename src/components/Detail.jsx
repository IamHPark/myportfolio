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

    const featureLists = project.features.map( feature =>
            <li>{feature}</li>
        )

    return (
        <>
            <h1 className="back" onClick={goLists}>BACK</h1>
            <div className="title">
                    <img src={project.img} className="project-img"/>
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
                <div className="project-detail-contents">
                    <img src="/img/project1/lighthouse-1.gif" alt="...loading" />
                    <div>
                        <p>{project.content}</p>
                        <p className="sub-heading">Tech Stack</p>
                        <TechBox tech={project.tech}/>
                        <p className="sub-heading">Features</p>
                        <ul>{featureLists}</ul>
                    </div>
                </div>
                <div className="project-detail-gallery">
                    <Gallery imgs={project.imgs}/>
                </div>
            </div>
        </>
    )
}