import React from 'react';
import Platter from './images/restauranfood.jpg'
import CardComponent from './components/CardComponent';
import GreekSalad from './images/greek salad.jpg'
import Bruchetta from './images/bruchetta.svg'
import LemonDessert from './images/lemon dessert.jpg'




const Main = () => {
  return (
    <main>
      <section role='Hero section' className='p-4 rounded' style={{ backgroundColor: '#495e57'  }}>
      
        <div className='row'>
            <div className='col ps-5'>
            <h1 style={{color:"#f4ce14"}}>Little Lemon</h1>
            <h5 className='text-white'>Chicago</h5>
        <p className='text-white'>We are a family owned<br></br>Mediteranean restaurant,<br></br>
        focused on traditional<br></br>recipes served with a modern<br></br>
        twist.
        </p>
        <button className='btn' style={{backgroundColor:"#f4ce14"}}>Reserve a table</button>

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

   

      <section role='Highlights' className='mt-5'>
        <div className='row'>
          <div className='col p-5 '>
            <h2>This weeks specials!</h2>
          </div>
          <div className='col  p-5 offset-1'>
            <button className='btn' style={{backgroundColor:"#f4ce14"}}>Online Menu</button>
          </div>
        </div>
       
        <div  className='row'>
          <div className='col ps-5'>
              <CardComponent
                imgSrc={GreekSalad}
                price="12.99"
                title="Greek salad"
                text="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons ."
                buttonLink="#"
              />
          </div>
          <div className='col'>
          <CardComponent
                imgSrc={Bruchetta}
                price="5.99"
                title="Bruchetta"
                text="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                buttonLink="#"
              />
          </div>
          <div className='col'>
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
   

      <section role='Testimonials'>

      </section>
      <section role='about'></section>
    </main>
  );
};

export default Main;
