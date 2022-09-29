import { React, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './Detail.scss'


export default function Detail(props) {
    const {id} = useParams();
    const project = props.projects.find( p => p.id == id);
    const navigate = useNavigate();

    const goLists = () => {
        navigate('/projects');
    }

    const scrollToDetail = useRef();

    return (
        <>
            <h1 className="back" onClick={goLists}>BACK</h1>
            <div className="title">
                    <img src={project.img} className="project-img"/>
                    <h1>{project.title}</h1>
                    <h3>{project.detail}</h3>
                    <div class="mouse_scroll" onClick={() => scrollToDetail.current.scrollIntoView({ behavior: 'smooth'})}>
                            <div class="mouse">
                                <div class="wheel"></div>
                            </div>
                            <div>
                                <span class="m_scroll_arrows unu"></span>
                                <span class="m_scroll_arrows doi"></span>
                                <span class="m_scroll_arrows trei"></span>
                            </div>
                    </div>
            </div>
            <div className="project-detail" ref={scrollToDetail}>
                <p>{project.content}</p>
                <p>Tech Stack : {project.tech}</p>
            </div>
        </>
    )
}