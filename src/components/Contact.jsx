import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import GoMenu from './GoMenu';
import './Contact.scss'

export default function Contact() {
  return (
    <>
        <GoMenu menu={"CONTACT"} />
        <div className="contact-form">
            <h1 className="contact-heading">
                CONTACT WITH ME
            </h1>
            <p>I am actively looking for a developer job titled web, front-end, back-end, full-stack and software developer. If you are interested in my background and what I experienced, feel free to reach out through contact below. I would always welcome any message and connection. </p>
            <a className='contact-link' href={process.env.PUBLIC_URL + '/img/resume.pdf'} target="_blank"><img src={process.env.PUBLIC_URL + "/img/icons/resume.png"} alt="" className='logo'/><span>Resume</span></a>
            <a className='contact-link' href='https://www.linkedin.com/in/heesoo-park/' target="_blank"><img src={process.env.PUBLIC_URL + "/img/icons/linkedin.png"} alt="" className='logo'/><span>LinkedIn</span></a>
            <a className='contact-link' href='https://github.com/IamHPark' target="_blank"><img src={process.env.PUBLIC_URL + "/img/icons/github.png"} alt="" className='logo'/><span>Github</span></a>
            <a className='contact-link' href="mailto:heesoo.p1023@gmail.com"><img src={process.env.PUBLIC_URL + "/img/icons/email.png"} alt="" className='logo'/><span>Email</span></a>
            {/* <Form action="mailto:heesoo.p1023@gmail.com" method="POST" encType='text/plain'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form> */}
        </div>
    </>
  );
}
