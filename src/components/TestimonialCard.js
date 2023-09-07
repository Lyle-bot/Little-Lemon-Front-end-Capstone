import React from 'react';

const TestimonialCard = ({name, rating, photo, review }) => {
  return (
    <div className="card" style={{ width: '15rem' }}>
      {/* Star Ratings */}
      <div className="card-header text-center text-warning">
        {rating}
      </div>

      {/* Circular Photo */}
      <div className="text-start mt-3 ps-3">
        <img src={photo} alt="Testimonial Author" style={{ borderRadius: '50%' }} width="80px" />
        <span className='ps-3'>{name}</span>
      </div>

      {/* Text Review */}
      <div className="card-body">
        <p className="card-text">{review}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
