import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../Header/Header';
import '../../styles/TripsPage.css';
import { getCountry, getTrips } from '../../utils/api/requestToApi';

const NewTrip = () => {
  const [countries, setCountries] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  const [trip, setTrip] = useState({
    start_date: '',
    end_date: '',
    company_name: '',
    address: {
      street: '',
      street_num: '',
      city: '',
      country: '',
      zip: '',
    },
    covid: true,
    covid_test_date: '12',
  });

  useEffect(async () => {
    // const sss = await getTrips();
    // console.log(sss.data);
    const res = await getCountry();
    setCountries(res.data);
  }, []);

  const onSubmit = useCallback((data) => {
    setTrip({
      start_date: data.start_date,
      end_date: data.end_date,
      company_name: data.company_name,
      address: {
        street: data.street,
        street_num: data.street_num,
        city: data.city,
        country: data.country,
        zip: data.zip,
      },
      covid: true,
      covid_test_date: '12',
    });
  }, [trip]);
  console.log(trip);
  return (
    <div className="containerr">
      <Header title="New Trip" />
      <div className="newTrip">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="tripCreator">
            <div className="titlee">
              <h5>Where do you want to go</h5>
            </div>
            <div className="chooseCountry">
              <select {...register('country')}>
                {countries.map((country) => (
                  <option value={country.value}>{country.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="startDate">
            <div className="start">
              <h5>Start date</h5>
              <input type="date" {...register('start_date')} />
            </div>
            <div className="end">
              <h5>End date</h5>
              <input type="date" {...register('end_date')} />
            </div>
          </div>

          <div className="adress">
            <div className="company">
              <h5>Company name</h5>
              <input type="text" {...register('company_name', { required: true, maxLength: 20 })} placeholder="Type here..." />
            </div>
            <div className="city">
              <h5>City</h5>
              <input type="text" {...register('city', { required: true, maxLength: 20 })} placeholder="Type here..." />
            </div>
            <div className="street">
              <h5>Street</h5>
              <input type="text" {...register('street', { required: true, maxLength: 20 })} placeholder="Type here..." />

            </div>
            <div className="streetNum">
              <h5>Street number</h5>
              <input type="text" {...register('street_num', { required: true, maxLength: 20 })} placeholder="Type here..." />

            </div>
            <div className="zip">
              <h5>Zip code</h5>
              <input type="text" {...register('zip', { required: true, maxLength: 20 })} placeholder="Type here..." />
            </div>
          </div>

          <div className="covid">
            <div className="covidContainer">
              <h5>Have you been recently tested for COVID-19?</h5>
              <div>
                <input type="radio" />
                <input type="radio" />
              </div>
            </div>
          </div>
          <div className="saveTrip">

            <input className="btn" type="submit" value="save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTrip;
