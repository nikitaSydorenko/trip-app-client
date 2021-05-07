import axios from 'axios';

export const getCountry = () => axios.get('https://task-devel.cleevio-vercel.vercel.app/api/country');
export const getTrips = () => axios.get('https://task-devel.cleevio-vercel.vercel.app/api/trip', {
  headers: {
    Authorization: 'Bearer c24u2sVThWVkXo1BVwDA',
  },
});
