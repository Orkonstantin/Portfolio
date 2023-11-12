import React, { useState } from "react";
import photo_1 from '../images/CostManagerImage.png';
import photo_2 from '../images/PopularMoviePredictionImage.png';
import photo_3 from '../images/ReactWeatherAppImage.png';
import photo_4 from "../images/PaintImage.png";
import photo_5 from "../images/IotSmartLockImage.png";
import {Button} from "react-bootstrap";

const ProjectsGallery = () => {
    const [selectedItem, setSelectedItem] = useState(0);

    const handleRadioChange = (event) => {
        setSelectedItem(Number(event.target.value));
    };

    const handleNavClick = (index) => {
        setSelectedItem(index);
    };

    const galleryItems = [
        {
            id: 0,
            imageSrc: photo_1,
            caption: 'Cost Manager',
            description: 'Cost Manager application that helps manage the user\'s expenses. Enables adding, editing, deleting, displaying the data, sorting and filtering.',
            url: 'https://orkonstantin.github.io/Cost-Manager-App/'
        },
        {
            id: 1,
            imageSrc: photo_2,
            caption: 'Movie Rating prediction',
            description: 'Data science project in python - Popular Movie Prediction.',
            url: 'https://github.com/Orkonstantin/data-science-project-python'
        },
        {
            id: 2,
            imageSrc: photo_3,
            caption: 'Weather react app',
            description: 'React Weather App using openweather API and GeoDB Cities API.',
            url: 'https://orkonstantin.github.io/react-weather-app/'
        },
        {
            id: 3,
            imageSrc: photo_4,
            caption: 'Paint',
            description: 'Paint application developed using C++ and MFC framework.',
            url: 'https://github.com/Orkonstantin/Paint'
        },
        {
            id: 4,
            imageSrc: photo_5,
            caption: 'IOT Smart-Lock',
            description: 'IOT Smart Lock application developed using python.',
            url: 'https://github.com/Orkonstantin/IOT-Smart-Lock'
        }
    ];

    return (
        <section id="Projects">
            <h3 className="sectionHeader">My <span>Projects</span></h3>
                <section className="gallery">
                    {galleryItems.map((item) => (
                        <input
                            key={item.id}
                            type="radio"
                            name="item"
                            value={item.id}
                            checked={selectedItem === item.id}
                            onChange={handleRadioChange}
                        />
                    ))}
                    <main>
                        {galleryItems.map((item) => (
                            <figure key={item.id} className={selectedItem === item.id ? 'active' : ''}>
                                <figcaption>{item.caption}</figcaption>
                                <img src={item.imageSrc} alt={item.caption} />
                                <p>{item.description}</p>
                                <br/>
                                <Button href={item.url} target={"_blank"} variant="primary">
                                    View Project
                                </Button>
                            </figure>
                        ))}
                    </main>
                    <nav>
                        {galleryItems.map((item) => (
                            <label key={item.id} onClick={() => handleNavClick(item.id)}>
                                <img src={item.imageSrc} alt={item.caption} />
                            </label>
                        ))}
                    </nav>
                </section>
        </section>
    );
};

export default ProjectsGallery;