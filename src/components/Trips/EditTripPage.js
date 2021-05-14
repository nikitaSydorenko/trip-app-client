import React, { useEffect, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getCountry, getTripById, putTrip } from '../../utils/api/requestToApi';
import Header from '../Header/Header';
import submitImg from '../../assets/submit.png';
import '../../styles/TripsPage.css';

const EditTripPage = ({ match }) => {
  const { id } = match.params;
  const [trip, setTrip] = useState({});
  const [countryApi, setCountryApi] = useState([]);
  const { register, handleSubmit, errors } = useForm();

  const getTrip = useCallback(async () => {
    try {
      const resTrip = await getTripById(id);
      const resCountry = await getCountry();
      setCountryApi(resCountry.data);
      setTrip(resTrip.data);
    } catch (e) {
      console.log('err', e);
    }
  }, [trip]);

  useEffect(() => {
    getTrip();
  }, []);

  const onSubmit = useCallback((data) => {
    putTrip(id, {
      start_date: data.start_date,
      end_date: data.end_date,
      company_name: data.company_name,
      address: {
        street: data.street,
        city: data.city,
        country: data.country,
        zip: data.zip,
      },
      covid: true,
      covid_test_date: '2021-05-11',
    });
  }, [trip]);

  const { start_date = '', end_date = '', company_name = '' } = trip || {};

  const {
    country = '', city = '', street = '', street_num = '', zip = '',
  } = trip.address || '';

  return (
    <div className="containerr">
      <Header title="Edit Trip" />
      <div className="newTrip">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="tripCreator">
            <div className="titlee">
              <h5>Where do you want to go</h5>
            </div>
            <div className="chooseCountry">
              <select defaultValue={country} required {...register('country', { required: true })}>
                { countryApi.map((c, index) => <option key={index}>{c.label}</option>) }
              </select>
            </div>
          </div>
          <div className="startDate">
            <div className="start">
              <h5>Start date</h5>
              <input type="date" required defaultValue={start_date} {...register('start_date', { required: true })} />
            </div>
            <div className="end">
              <h5>End date</h5>
              <input type="date" required defaultValue={end_date} {...register('end_date', { required: true })} />
            </div>
          </div>

          <div className="adress">
            <div className="company">
              <h5>Company name</h5>
              <input type="text" required defaultValue={company_name} {...register('company_name', { required: true })} placeholder="Type here..." />
            </div>
            <div className="city">
              <h5>City</h5>
              <input type="text" required defaultValue={city} {...register('city', { required: true })} placeholder="Type here..." />
            </div>
            <div className="street">
              <h5>Street</h5>
              <input type="text" required defaultValue={street} {...register('street', { required: true })} placeholder="Type here..." />
            </div>
            <div className="streetNum">
              <h5>Street number</h5>
              <input type="number" required defaultValue={street_num} {...register('street_num', { required: true })} placeholder="Type here..." />
            </div>
            <div className="zip">
              <h5>Zip code</h5>
              <input type="text" required defaultValue={zip} {...register('zip', { required: true })} placeholder="Type here..." />
            </div>
          </div>
          <div className="covid">
            <h5>Have you been recently tested for COVID-19?</h5>
            <div className="buttn">
              <input type="radio" required defaultValue={trip.covid} />
              <p>Yes</p>
            </div>
            <div className="buttn">
              <input type="radio" required defaultValue={trip.covid} />
              <p>No</p>
            </div>
          </div>
          <div className="saveTrip">
            <button type="submit">
              <p>Save</p>
              <img src={submitImg} alt="subm" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTripPage;
