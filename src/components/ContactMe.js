import React from 'react';
import {Row, Col} from "react-bootstrap";
import {MdOutlineEmail} from 'react-icons/md';
import {SlLocationPin} from 'react-icons/sl';
import {BsWhatsapp} from 'react-icons/bs';
import { useForm, ValidationError } from '@formspree/react';
import $ from 'jquery';
const ContactMe = () => {

    const [state, handleSubmit] = useForm("mleklger");
    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleSubmit(event);

        $('.contact__options-col form').hide();
        $('.contact__options-col').append('<div class="success-message">Message sent successfully!</div>');
    };

    return (
        <section id="contact-me" className="contact-me contact section">
            <br/>
            <br/>
            <h3 className="sectionHeader">Contact Me</h3>
            <h6 className="getInTouchHeader">Get In Touch</h6>
            <br/>

            <div className="container contact__container">
                <Row>


                    <Col xs={{ span: 12, order: 1 }} lg={5} >
                        <div className="contact__options">

                            <article className="contact__option">
                                <Row>
                                    <Col xs={{ span: 12, order: 1 }} lg={4}>
                                    </Col>
                                    <Col xs={{ span: 12, order: 1 }} lg={3}>
                                        <MdOutlineEmail className="contact__option-icon"/>
                                    </Col>
                                    <Col xs={{ span: 12, order: 2 }} lg={5}>
                                        <h4>Email</h4>
                                        <h5>kon3101@gmail.com</h5>
                                        <a href="mailto:kon3101@gmail.com" target="_blank">Send an email</a>
                                    </Col>
                                </Row>
                            </article>

                            <article className="contact__option">
                                <Row>
                                    <Col xs={{ span: 12, order: 1 }} lg={4}>
                                    </Col>
                                    <Col xs={{ span: 12, order: 1 }} lg={3}>
                                        <BsWhatsapp className="contact__option-icon"/>
                                    </Col>
                                    <Col xs={{ span: 12, order: 1 }} lg={5}>
                                        <h4>WhatsApp</h4>
                                        <h5>052-6657676</h5>
                                        <a href="https://wa.me/972526657676" target="_blank">Send a message</a>
                                    </Col>
                                </Row>
                            </article>

                            <article className="contact__option">
                                <Row>
                                    <Col xs={{ span: 12, order: 1 }} lg={4}>
                                    </Col>
                                    <Col xs={{ span: 12, order: 1 }} lg={3}>
                                        <SlLocationPin className="contact__option-icon"/>
                                    </Col>
                                    <Col xs={{ span: 12, order: 2 }} lg={5}>
                                        <h4>Location</h4>
                                        <h5>Holon, Israel</h5>
                                        <a
                                            href="https://www.google.com/maps/place/Holon,+Israel"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View on map
                                        </a>
                                    </Col>
                                </Row>
                            </article>

                        </div>
                    </Col>

                    <Col xs={{ span: 12, order: 2 }} lg={1}>
                    </Col>

                    <Col xs={{ span: 12, order: 3 }} lg={6} className="contact__options-col">
                        <br/>
                        <form action="" onSubmit={handleFormSubmit}>
                            <input
                                className="formInput"
                                id="name"
                                type="text"
                                name="name"
                                placeholder='Your Full Name'
                                required
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                            <input
                                className="formInput"
                                id="email"
                                type="email"
                                name="email"
                                placeholder='Your Email'
                                required
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <textarea
                                className="formInput"
                                id="message"
                                name="message"
                                placeholder='Your Message'
                                required
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <button className="formInput" type="submit" disabled={state.submitting}>
                                Submit
                            </button>
                        </form>
                    </Col>


                </Row>
            </div>
        </section>
    );
};
export default ContactMe;