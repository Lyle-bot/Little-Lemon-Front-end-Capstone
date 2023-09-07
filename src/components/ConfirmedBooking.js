import Restaurant from './../images/restaurant.jpg'

const ConfirmedBooking  = () => {
    return (
      
        <div className='container'>
            <div className='row'>
                <div className='col mt-2'>
                <h4 className='text-center'>Your reservation has been successfully confirmed! Thank you and  we look forward to welcoming you to our establishment.</h4>

                <img src={Restaurant} className="card-img-top pt-2 mx-auto d-block rounded" alt="Picture of Restaurant" style={{width: "60%", height: "auto"}} />



                </div>
          
            </div>

        </div>
         
    
   
    );
  };
  
  export default ConfirmedBooking ;
  