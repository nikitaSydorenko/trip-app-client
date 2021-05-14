import React, { useCallback, useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from '../Header/Header';
import { deletetrip, getTrips } from '../../utils/api/requestToApi';
import Trip from './Trip';
import '../../styles/Trips.css';

const YourTripsPage = () => {
  const [loading, setLoading] = useState(false);
  const [trips, setTrips] = useState([]);

  const onGetTrips = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getTrips();
      setTrips(res.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    onGetTrips();
  }, []);

  const handleDelete = useCallback((id) => {
    const newArr = trips.filter((n) => n.id !== id);
    setTrips([...newArr]);
    deletetrip(id);
  }, [trips]);

  return (
    <div>
      <Header title="Your Trips" />
      <div className="sectionTrips">
        { loading ? <CircularProgress color="secondary" /> : trips.map((trip) => <Trip handleDelete={handleDelete} trip={trip} key={trip.id} />)}
      </div>
    </div>
  );
};

export default YourTripsPage;
