import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import NavbarTrips from './components/Navbar/NavbarTrips';
import PlaceHolderTrip from './components/PlaceHolderTrip';
import YourTripsPage from './components/Trips/TripsPage';
import NewTrip from './components/Trips/NewTrip';
import ViewTripPage from './components/Trips/ViewTripPage';
import EditTripPage from './components/Trips/EditTripPage';
import './styles.css';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <NavbarTrips />
      <Switch>
        <Route path="/yourtrips" component={YourTripsPage} />
        <Route path="/newtrip" component={NewTrip} />
        <Route path="/view-trip/:id" render={(props) => <ViewTripPage {...props} />} />
        <Route path="/edit-trip/:id" render={(props) => <EditTripPage {...props} />} />
      </Switch>
      <PlaceHolderTrip />
    </BrowserRouter>
  </div>
);

export default App;
