import React from 'react';
import Carousel, { slidesToShowPlugin, autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";

import "./Slider.css";

const Slider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>My proyects</h2>
            </div>

            <Carousel 

                plugins={[
                        'arrows',
                        'clickToChange',
                        'infinite',
                        'centered',
                        {
                            resolve: autoplayPlugin,
                            options: {
                                interval: 5000,
                            }
                        },
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                            numberOfSlides: 1
                            }
                        },
                ]}  
                animationSpeed={3000}
                
                slides={Slides}
                // breakpoints={{
                //     960: {
                //         itemWidth: 250,
                //         arrows: false
                //     }
                // }}
            />
            
        </div>
    )
}

export default Slider
