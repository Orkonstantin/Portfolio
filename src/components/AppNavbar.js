import React, { useState, useEffect } from "react";
import { Navbar, Nav  } from "react-bootstrap";
const AppNavbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleScroll = () => {
        const scrolled = window.scrollY > 0;
        setIsScrolled(scrolled);
    };

    return (
        <section id="home">
        <Navbar
            collapseOnSelect
            expand="md"
            fixed="top"
            bg={"hsl(250, 30%, 8%);"}
            variant={"dark"}
            className={isScrolled ? "navbar-scrolled" : ""}
        >
            <Navbar.Brand
                className={
                    isScrolled ? "nav-brand-small" : "nav-brand-big"
                }
                href="#home">
            OrKonstantin</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                    <Nav.Link active href="#home">Home</Nav.Link>
                    <Nav.Link href="#AboutMe">About Me</Nav.Link>
                    <Nav.Link href="#Characteristics">Characteristics</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#Projects">Projects</Nav.Link>
                    <Nav.Link href="#contact-me">Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </section>
    );
};
export default AppNavbar;
