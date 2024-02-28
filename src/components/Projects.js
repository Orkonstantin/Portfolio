import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import CostManagerImage from "../images/CostManagerImage.png";
import IotSmartLockImage from "../images/IotSmartLockImage.png";
import PaintImage from "../images/PaintImage.png";
import PopularMoviePredictionImage from "../images/PopularMoviePredictionImage.png";
import ReactWeatherAppImage from "../images/ReactWeatherAppImage.png";
import NikeShoesEcommerceImage from "../images/NikeshoesE-commerceImage.png";
import NikeShoesEcommerceAdminImage from "../images/NikeshoesE-commerceAdminImage.png";
import "../styles.css";

const cardItems = [
  {
    id: 1,
    headline: "Cost Manager React web application",
    photo: CostManagerImage,
    description:
      "This app helps manage the user's expenses. Enables adding, editing, deleting, displaying the data, sorting and filtering.",
    url: "https://orkonstantin.github.io/Cost-Manager-App/",
  },
  {
    id: 2,
    headline: "React Weather App",
    photo: ReactWeatherAppImage,
    description:
      "React Weather App using openweather API and GeoDB Cities API.",
    url: "https://orkonstantin.github.io/react-weather-app/",
  },
  {
    id: 3,
    headline: "Popular Movie Prediction",
    photo: PopularMoviePredictionImage,
    description: "Data science project in python - Popular Movie Prediction.",
    url: "https://github.com/Orkonstantin/data-science-project-python",
  },
  {
    id: 4,
    headline: "Nike shoes E-commerce",
    photo: NikeShoesEcommerceImage,
    description:
      "A Nike shoes E-commerce store built with Next.js, React, and Tailwind CSS. Features include product listing, shopping cart functionality, and order processing with Stripe.",
    url: "https://nike-shoes-ecommerce-o.vercel.app/",
  },
  {
    id: 5,
    headline: "Nike Shoes Ecommerce Admin",
    photo: NikeShoesEcommerceAdminImage,
    description:
      "A Next.js project for an ecommerce admin panel, providing a user interface for managing products, orders, and categories.",
    url: "https://github.com/Orkonstantin/Nike-Shoes-Ecommerce-Admin",
  },
  // {
  //   id: 6,
  //   headline: "Paint",
  //   photo: PaintImage,
  //   description: "Paint application developed using C++ and MFC framework.",
  //   url: "https://github.com/Orkonstantin/Paint",
  // },
  // {
  //   id: 7,
  //   headline: "IOT Smart-Lock",
  //   photo: IotSmartLockImage,
  //   description: "IOT Smart Lock application developed using python.",
  //   url: "https://github.com/Orkonstantin/IOT-Smart-Lock",
  // },
];

function determineClasses(indexes, cardIndex) {
  if (indexes.currentIndex === cardIndex) {
    return "active";
  } else if (indexes.nextIndex === cardIndex) {
    return "next";
  } else if (indexes.previousIndex === cardIndex) {
    return "prev";
  }
  return "inactive";
}

const Projects = () => {
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1,
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleCardTransition = useCallback(() => {
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2,
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {
    let transitionInterval;
    if (!isHovered) {
      transitionInterval = setInterval(() => {
        handleCardTransition();
      }, 3000);
    }
    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes, isHovered]);

  const handleCardMouseEnter = () => {
    setIsHovered(true);
  };
  const handleCardMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section id="Projects">
      <h3 className="sectionHeader">My Projects</h3>
      <Carousel className="carousel slide card" variant="dark">
        {cardItems.map((card, index) => (
          <Carousel.Item interval={2000}>
            <Row className="justify-content-center align-items-center">
              <Col
                className="projectDetails"
                lg={4}
                md={4}
                xs={{ span: "auto", order: 1 }}
              >
                <h2 className="m-2">{card.headline}</h2>
                <p className="m-2">{card.description}</p>
                <Button
                  className={"viewProjectBtn"}
                  href={card.url}
                  target={"_blank"}
                  variant="primary"
                >
                  View Project
                </Button>
              </Col>
              <Col lg={8} md={8} xs={{ span: "auto", order: 2 }}>
                <Image
                  className="project-image"
                  src={card.photo}
                  alt={card.headline}
                />
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};
export default Projects;
