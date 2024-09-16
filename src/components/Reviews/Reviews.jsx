import React from 'react'
import "./Reviews.scss";
import ReviewCard from '../ReviewCard/ReviewCard';
import Slider from "react-slick";

const Reviews = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

  return (
    <div className='reviews'>
        <div className="container">
            <div className="content">
                <div className="content__header">
                    <h2>Testimonials</h2>
                    <p>Some quotes from our happy customers</p>
                </div>
                <div className="content__body">
                    <div className="reviews-list">
                        <div className="slider-container">
                            <Slider {...settings}>
                                <ReviewCard />
                                <ReviewCard />
                                <ReviewCard />
                                <ReviewCard />
                                <ReviewCard />
                                <ReviewCard />
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews