import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/Header';
import { getCountry, postTrip } from '../../utils/api/requestToApi';
import submitImg from '../../assets/submit.png';
import '../../styles/TripsPage.css';

const NewTrip = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
    successCreated: {
      width: '400px',
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [countries, setCountries] = useState([]);
  const { register, errors, handleSubmit } = useForm();

  const getDataFromApi = async () => {
    try {
      const res = await getCountry();
      setCountries(res.data);
    } catch (e) {
      console.log('error!', e);
    }
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  useEffect(() => {
    getDataFromApi();
  }, []);

  const onSubmit = useCallback((data) => {
    try {
      postTrip({
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
      setOpen(true);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

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
              <select {...register('country', { required: true })}>
                {countries.map((country, index) => (
                  <option key={index} value={country.label}>{country.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="startDate">
            <div className="start">
              <h5>Start date</h5>
              <input type="date" required {...register('start_date', { required: true })} />
            </div>
            <div className="end">
              <h5>End date</h5>
              <input type="date" required {...register('end_date', { required: true })} />
            </div>
          </div>
          <div className="adress">
            <div className="company">
              <h5>Company name</h5>
              <input type="text" required {...register('company_name', { required: true })} placeholder="Type here..." />
            </div>
            <div className="city">
              <h5>City</h5>
              <input type="text" {...register('city')} placeholder="Type here..." />
            </div>
            <div className="street">
              <h5>Street</h5>
              <input type="text" {...register('street')} placeholder="Type here..." />
            </div>
            <div className="streetNum">
              <h5>Street number</h5>
              <input type="number" {...register('street_num')} placeholder="Type here..." />
            </div>
            <div className="zip">
              <h5>Zip code</h5>
              <input type="text" required {...register('zip', { required: true })} placeholder="Type here..." />
            </div>
          </div>
          <div className="covid">
            <h5>Have you been recently tested for COVID-19?</h5>
            <div className="buttn">
              <input type="radio" {...register('covid', { required: true })} />
              <p>Yes</p>
            </div>
            <div className="buttn">
              <input type="radio" {...register('covid', { required: true })} />
              <p>No</p>
            </div>
          </div>
          <div className="saveTrip">
            <button type="submit">
              <p>Save</p>
              <img src={submitImg} alt="subm" />
            </button>
          </div>
          <Snackbar open={open} className={classes.successCreated} autoHideDuration={60000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Trip was created successfully!
            </Alert>
          </Snackbar>
        </form>
      </div>
    </div>
  );
};

export default NewTrip;
