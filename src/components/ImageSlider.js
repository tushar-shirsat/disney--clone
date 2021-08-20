import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import styled from 'styled-components';

const ImageSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg" alt="slider-badging" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" alt="slider-badag" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scale.jpg" alt="slider-scale" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scales.jpg" alt="slider-scales" />
            </Wrap>
        </Carousel>
    )
}

export default ImageSlider

const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button{
        &:before{
            font-size: 10px;
            color: rgb(150,158,171);
        }
    }
    li.slick-active button::before{
        color: #fff;
    }
    .slick-list{
        overflow: visible;
    }
    button{
        z-index: 1;
    }
`;

const Wrap = styled.div`
    img{
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: 0px 26px 30px -10px rgba(0,0,0,0.69) , 0px 16px 10px -10px rgba(0,0,0,0.73);
        transition-duration: 300ms;
        &:hover{
            border: 4px solid rgba(249,249,249,0.8)
        }
    }
`;