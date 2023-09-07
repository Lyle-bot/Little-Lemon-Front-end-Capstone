import {useEffect} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useNavigate } from "react-router-dom";

function changeDateFormat(date) {
    const [year, month, day] = date.split('-');
    return `${month}/${day}/${year}`;
  }
  

const BookingPage = ({ availableTimes = [], dispatch  }) => {
  const navigate = useNavigate()  
  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      numberOfGuests: '',
      occasion: '',
    },
    validationSchema: Yup.object({
      date: Yup.string()
        .required('Required'),
      time: Yup.string()
        .required('Required'),
      numberOfGuests: Yup.number()
        .min(1, 'Must be more than 0')
        .required('Required'),
      occasion: Yup.string()
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
      //  send data to submitAPI(values) 
      navigate("/confirmation-booking");
    },
  });

  useEffect(() => {
   
    if (formik.values.date) {
      dispatch({ type: 'UPDATE_TIMES', date: formik.values.date });
    }
  }, [formik.values.date, dispatch]);
  

  return (
    <div className='container  p-4 mt-3' >
        <div className='row'>
           
        
        <div className='col-md-5 p-4 rounded-4' style={{ backgroundColor: '#495e57'  }}>
        <h1 className='text-white'>Reserve a table at Little Lemon</h1>
        <form onSubmit={formik.handleSubmit}>
        <div>
          <label className='text-white' htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            className='form-control '
            {...formik.getFieldProps('date')}
          />
          {formik.errors.date ? <div className='text-warning'>{formik.errors.date}</div> : null}
        </div>
        
        <div>
        <label className='text-white' htmlFor="time">Time</label>
        <select
          id="time"
          className='form-control'
          {...formik.getFieldProps('time')}
        >
          <option value="" label="Select time" />
          {Array.isArray(availableTimes) && availableTimes.map((time, index) => (  // check if availableTimes is an array
            <option value={time} label={time} key={index} />
          ))}
        </select>
        {formik.errors.time ? <div className='text-warning'>{formik.errors.time}</div> : null}
      </div>

        
        <div>
          <label className='text-white' htmlFor="numberOfGuests">Number of guests</label>
          <input
            id="numberOfGuests"
            className='form-control '
            type="number"
            {...formik.getFieldProps('numberOfGuests')}
          />
          {formik.errors.numberOfGuests ? <div className='text-warning'>{formik.errors.numberOfGuests}</div> : null}
        </div>
        
        <div>
          <label className='text-white' htmlFor="occasion">Occasion</label>
          <select  className='form-control ' id="occasion" {...formik.getFieldProps('occasion')}>
            <option value="" label="Select occasion" />
            <option value="Birthday" label="Birthday" />
            <option value="Anniversary" label="Anniversary" />
          </select>
          {formik.errors.occasion ? <div className='text-warning'>{formik.errors.occasion}</div> : null}
        </div>
        
        <button className="btn mt-4" style={{backgroundColor:"#f4ce14"}} type="submit">Submit Reservation</button>
     
      </form>

        </div>
        {formik.values.date !== '' ? <>
            <div className='col-md-5 p-4 border border-2 rounded  ms-md-5'>
                <h6 className="display-6 text-center">Available Times for {changeDateFormat(formik.values.date)}</h6>
                <hr></hr>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Num</th>
                    <th scope="col">Time Slot</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(availableTimes) && availableTimes.map((time, index) => (
                        <tr key={index} className={formik.values.time === time ? 'table-success' : ''}>
                        <th scope="row">{index + 1}.</th>
                        <td>{time}</td>
                        </tr>
                    ))}
                </tbody>

                </table>
            </div>
            </> : null}
            </div>
        </div>
  );
};

export default BookingPage;
