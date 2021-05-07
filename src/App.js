import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import NavbarTrips from './components/Navbar/NavbarTrips';
import PlaceHolderTrip from './components/PlaceHolderTrip';
import YourTripsPage from './components/Trips/TripsPage';
import './styles.css';
import NewTrip from './components/Trips/NewTrip';
import { getCountry } from './utils/api/requestToApi';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <NavbarTrips />
      <Switch>
        <Route path="/yourtrips" component={YourTripsPage} />
        <Route path="/newtrip" component={NewTrip} />
      </Switch>
      <PlaceHolderTrip />
    </BrowserRouter>
  </div>

);

export default App;
