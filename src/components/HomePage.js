import LemonDessert from './../images/lemon dessert.jpg'
import React from 'react';
import Platter from './../images/restauranfood.jpg'
import CardComponent from './CardComponent';
import GreekSalad from './../images/greek salad.jpg'
import Bruchetta from './../images/bruchetta.svg'
import FounderA from './../images/Mario and Adrian A.jpg'
import FounderB from './../images/Mario and Adrian b.jpg'
import TestimonialCard from './TestimonialCard';
import Face1 from './../images/face1.jpeg'
import Face2 from './../images/face2.jpeg'
import Face3 from './../images/face3.jpeg'
import Face4 from './../images/face4.jpeg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <main>
         {/* Hero section*/}
      <section  className='p-4 rounded' style={{ backgroundColor: '#495e57'  }}>
      
      <div className='row'>
          <div className='col ps-5'>
          <h1 style={{color:"#f4ce14"}}>Little Lemon</h1>
          <h5 className='text-white'>Chicago</h5>
      <p className='text-white'>We are a family owned<br></br>Mediteranean restaurant,<br></br>
      focused on traditional<br></br>recipes served with a modern<br></br>
      twist.
      </p>
   
      <Link to="/booking-page" className="btn" style={{backgroundColor:"#f4ce14"}}>Reserve a table</Link>

          </div>
          <div className='col position-relative d-none d-md-block '>
          <img
            src={Platter}
            alt='Restaurant food'
            className='img-fluid rounded-4'
            style={{
              position: 'absolute',
              bottom: '-30%', 
              left: '20px',
              zIndex: '1',
              width: '300px',  
              height:'350px'
            }}
          />
        </div>

      </div>
    </section>

 
       {/* THighlights*/}
    <section  className='mt-5'>
      <div className='row'>
        <div className='col-6 p-5 '>
          <h2>This weeks specials!</h2>
        </div>
        <div className='col-4  p-5 offset-1'>
         
          <Link to="/menu" className="btn" style={{backgroundColor:"#f4ce14"}}>Online Menu</Link>
        </div>
      </div>
     
      <div  className='row'>
        <div className='col ps-5 pb-4'>
            <CardComponent
              imgSrc={GreekSalad}
              price="12.99"
              title="Greek salad"
              text="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons ."
              buttonLink="#"
            />
        </div>
        <div className='col ps-5 pb-4'>
        <CardComponent
              imgSrc={Bruchetta}
              price="5.99"
              title="Bruchetta"
              text="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
              buttonLink="#"
            />
        </div>
        <div className='col ps-5 pb-4'>
        <CardComponent
              imgSrc={LemonDessert}
              price="5.00"
              title="Lemon dessert"
              text="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
              buttonLink="#"
            />
        </div>
      </div>
     
    </section>
     <hr></hr>
      {/* Testimonials */}
    <section >
      <div className='row mt-5'>
        <div className='col ps-5 ps-md-0 pb-4'>
        <TestimonialCard 
        name="Jennifer J."
        rating="★★★★★"
        photo={Face1}
        review="This restaurant is amazing. The atmosphere is cozy and the food is divine!"
      />
        </div>
        <div className='col ps-5 ps-md-0 pb-4'>
        <TestimonialCard 
        name="Dennis D."
        rating="★★★★★"
        photo={Face2}
        review="Little Lemon is a hidden gem. The staff is incredibly welcoming and the dishes are a culinary delight!"
      />
        </div>
        <div className='col ps-5 ps-md-0 pb-4'>
        <TestimonialCard 
        name="Alexia P."
        rating="★★★★★"
        photo={Face3}
        review="I can't get enough of their menu. Every dish is a work of art, both visually and in flavor!"
      />
        </div>
        <div className='col ps-5 ps-md-0 pb-4'>
        <TestimonialCard 
        name="Larry W."
        rating="★★★★★"
        photo={Face4}
        review="What a fantastic dining experience! The modern twists on traditional recipes are absolutely genius!"
      />
        </div>
      </div>

    </section>

     {/* About Section*/}
     <hr></hr>
    <section >
      <div className='row mt-5'>
        <div className='col-12 col-md'><p className='p-2'>Founded by brothers Mario and Adrian, Little Lemon is a family-owned Mediterranean restaurant nestled in the heart of Chicago. We honor timeless recipes from the Mediterranean, served with a modern twist that makes each dish uniquely ours. Our culinary philosophy emphasizes fresh ingredients and vibrant flavors in an atmosphere that feels like home. Come experience the rich traditions and modern flair that only Little Lemon can offer.</p> </div>
        <div className='col-12 col-md'>
          <img src={FounderA} className="card-img-top pt-4" alt="founder pictures" />
         
          </div>
          <div className='col-12 col-md'><img  src={FounderB} className="card-img-top pt-2" alt="..." /></div>
      </div>

    </section>
     
      </main>
    );
  };
  
  export default Home;
