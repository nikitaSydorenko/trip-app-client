import React, {
  useCallback, useState, useEffect, useContext,
} from 'react';
import { useHistory } from 'react-router-dom';
import view from '../../assets/view.png';
import deleteBt from '../../assets/delete.png';
import editBt from '../../assets/Edit-icon.png';
import '../../styles/Trips.css';

const Trip = ({ trip, handleDelete }) => {
  const history = useHistory();
  const {
    country, city, street, zip,
  } = trip.address;
  const { company_name, start_date, end_date } = trip;

  const moveToView = useCallback(() => {
    history.push(`/view-trip/${trip.id}`);
  }, []);

  const moveToEditTrip = useCallback(() => {
    history.push(`/edit-trip/${trip.id}`);
  }, []);

  const onDeleteTrip = useCallback((id) => () => {
    handleDelete(id);
  }, []);

  return (
    <div className="tripCard">
      <div className="countryTrip">
        <div>
          <div className="firstBlock">
            <h4>
              {country}
              {' '}
            </h4>
            <>|</>
            <h5>
              {start_date}
              {' '}
              {'-'}
              {' '}
              {end_date}
            </h5>
          </div>
        </div>
        <div className="where">
          <h5>{company_name}</h5>
          <>|</>
          <h4>
            {' '}
            {city}
            {' '}
            {street}
            {' '}
            {zip}
          </h4>
        </div>
      </div>
      <div className="editBtns">
        <button className="deleteBtn" onClick={onDeleteTrip(trip.id)}>
          <img src={deleteBt} />
        </button>
        {
         end_date < new Date().toISOString().substring(0, 10)
           ? (
             <button className="editBtn" onClick={moveToView}>
               <img src={view} />
             </button>
           )
           : (
             <button className="editBtn" onClick={moveToEditTrip}>
               <img src={editBt} />
             </button>
           )
        }
      </div>
    </div>
  );
};

export default Trip;
