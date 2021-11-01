import React from "react";
import "./Slider.css"
// import challengeReactMoviesRating from "../../media/challenge-react-movies-rating.png";
// import dogHome from "../../media/dog-home.png";
// import ecommerceGrupal from "../../media/e-commerce-grupal.png";

const slidesInfo = [
    {
        src: "https://i.ibb.co/RDqHcyk/challenge-react-movies-rating.png",
        alt: "challengeReactMoviesRating",
        desc: "challengeReactMoviesRating"
    },
    {
        src: "https://i.ibb.co/YcPn4b7/dog-home.png",
        alt: "dogHome",
        desc: "dogHome"
    },
    {
        src: "https://i.ibb.co/d5Kc2h9/e-commerce-grupal.png",
        alt: "ecommerceGrupal",
        desc: "ecommerceGrupal"
    },
];


const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
))

export default slides;