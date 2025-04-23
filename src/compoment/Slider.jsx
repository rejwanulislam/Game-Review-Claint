import React from 'react'

export default function Slider() {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img  src="https://i.ibb.co.com/j9S1g7hL/Flux-Dev-a-horizontal-composition-featuring-four-distinct-scre-0.jpg" className="w-full h-52" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co.com/z371dH1/Flux-Dev-a-horizontal-composition-featuring-four-distinct-scre-1.jpg" className="w-full h-52" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co.com/1Y2gTkKk/Flux-Dev-a-horizontal-composition-featuring-four-distinct-scre-2.jpg" className="w-full h-52" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img  src="https://i.ibb.co.com/4RQppyLt/Flux-Dev-a-horizontal-composition-featuring-four-distinct-scre-3.jpg" className="w-full h-52" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a  href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}
