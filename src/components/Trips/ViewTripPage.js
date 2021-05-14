import React, { useCallback, useEffect, useState } from 'react';
import Header from '../Header/Header';
import '../../styles/TripsPage.css';
import { getTripById } from '../../utils/api/requestToApi';

const ViewTripPage = ({ match }) => {
  const { id } = match.params;
  const [trip, setTrip] = useState({});

  const getTrip = useCallback(async () => {
    try {
      const res = await getTripById(id);
      setTrip(res.data);
    } catch (e) {
      console.log('err', e);
    }
  }, [trip]);

  useEffect(() => {
    getTrip();
  }, []);

  const {
    start_date = '',
    end_date = '',
    company_name = '',
  } = trip || {};

  const {
    country = '', city = '', street = '', street_num = '', zip = '',
  } = trip.address || '';

  return (
    <div className="containerr">
      <Header title="View Trip" />
      <div className="newTrip">
        <div className="tripCreator">
          <div className="titlee">
            <h5>Where do you want to go</h5>
          </div>
          <div className="chooseCountry">
            <select disabled defaultValue={country}>
              <option>{country}</option>
            </select>
          </div>
        </div>
        <div className="startDate">
          <div className="start">
            <h5>Start date</h5>
            <input type="date" disabled defaultValue={start_date} />
          </div>
          <div className="end">
            <h5>End date</h5>
            <input type="date" disabled defaultValue={end_date} />
          </div>
        </div>
        <div className="adress">
          <div className="company">
            <h5>Company name</h5>
            <input type="text" disabled defaultValue={company_name} />
          </div>
          <div className="city">
            <h5>City</h5>
            <input type="text" disabled defaultValue={city} />
          </div>
          <div className="street">
            <h5>Street</h5>
            <input type="text" disabled defaultValue={street} />

          </div>
          <div className="streetNum">
            <h5>Street number</h5>
            <input type="number" disabled defaultValue={street_num} />

          </div>
          <div className="zip">
            <h5>Zip code</h5>
            <input type="text" disabled defaultValue={zip} />
          </div>
        </div>
        <div className="covid">
          <h5>Have you been recently tested for COVID-19?</h5>
          <div className="buttn">
            <input type="radio" disabled defaultValue={trip.covid} />
            <p>Yes</p>
          </div>
          <div className="buttn">
            <input type="radio" disabled defaultValue={trip.covid} />
            <p>No</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTripPage;
