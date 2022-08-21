import React, { useState } from "react";
import "./Slider.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { sliderItems } from "../../data";

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const onArrowClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else if (direction === "right") {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    return (
        <div className="w-100 vh-100 flex relative overflow-hidden">
            <div onClick={() => onArrowClick("left")} className="slider-arrow w2 h2 flex justify-center absolute top-0 bottom-0 pointer o-50 z-2 left-1">
                <ArrowLeftIcon />
            </div>
            <div className="wrapper h-100 flex justify-center" style={{ transform: `translateX(${slideIndex * -100}vw)` }}>
                {
                    sliderItems.map(item => (
                        <div key={item.id} className="slide flex justify-center items-center vh-100" style={{ background: `#${item.bg}` }}>
                            <div className="flex-1 h-100 pl5 flex justify-end items-center">
                                <img src={item.img} alt="slide" />
                            </div>
                            <div className="flex-1 pa6">
                                <h1 className="f1">{item.title}</h1>
                                <p className="ma0 mt5 mb5 f3 fw5 tracked">{item.desc}</p>
                                <button className="pa2 f5 pointer">SHOP NOW</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div onClick={() => onArrowClick("right")} className="slider-arrow w2 h2 flex justify-center absolute top-0 bottom-0 pointer o-50 z-2 right-1">
                <ArrowRightIcon />
            </div>
        </div>
    )
}

export default Slider