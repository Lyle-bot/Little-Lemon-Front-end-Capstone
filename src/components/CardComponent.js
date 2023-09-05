import React from 'react';

const CardComponent = ({ imgSrc, price, title, text, buttonLink }) => {
  return (
    <div className="card border border-0" style={{ width: '18rem' ,backgroundColor:"#edefee" }}>
      <img src={imgSrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title} <span className='ps-5' style={{color:'#ee9972'}}><small>${price}</small></span></h5>
        <p className="card-text">{text}</p>
        <a href={buttonLink} className="btn" style={{backgroundColor:"#f4ce14"}}>
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
