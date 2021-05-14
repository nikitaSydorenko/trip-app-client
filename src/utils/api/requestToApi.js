import axios from 'axios';

const url = 'https://task-devel.cleevio-vercel.vercel.app/api';
const trip = '/trip';
const country = '/country';

const config = {
  headers: {
    Authorization: 'Bearer c24u2sVThWVkXo1BVwDA',
  },
};

export const getCountry = () => axios.get(`${url}${country}`);

export const getTrips = () => axios.get(`${url}${trip}`, config);

export const postTrip = (trip) => axios.post(`https://task-devel.cleevio-vercel.vercel.app/api/trip`, trip, config);

export const deletetrip = (id) => axios.delete(`${url}${trip}/${id}`, config);

export const getTripById = (id) => axios.get(`${url}${trip}/${id}`, config);

export const putTrip = (id, tripp) => axios.put(`${url}${trip}/${id}`, tripp, config);