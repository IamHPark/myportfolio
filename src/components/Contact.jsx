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
            <p>Hi, I am actively looking for a web developement or software development job. If you are interested in my projects or background, feel free to contact me via email or Linkedin. All messages are welcome!</p>
            <a href='https://www.linkedin.com/in/heesoo-park/' target="_blank"><img src="/img/icons/linkedin-logo.webp" alt="" className='logo'/></a>
            <a href='https://github.com/IamHPark' target="_blank"><img src="/img/icons/github-logo.png" alt="" className='logo'/></a>
            <Form action="mailto:heesoo.p1023@gmail.com" method="POST" encType='text/plain'>
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
            </Form>
        </div>
    </>
  );
}
