import React from 'react';
import defaultLine from '../assets/default.png';
import '../styles/PlaceHolder.css';

const PlaceHolderTrip = () => (
  <div className="containerPlaceHolder">
    <img src={defaultLine} />
    <div className="title">
      Trips and Tricks
    </div>
    <div className="content">
      Company was established back in the year 2007 by 3 friends who were fascinated by the web and mobile technologies and product design.
      Today, Cleevio is lead by its own CEO, David Bezdeka, and is working on projects for clients and companies around the world.
      With his work he helps with the product itself, starting startups or understanding how to manage and deliver a large-scale solution.
      Cleevio‘s people come from a diverse environment, but they work like a well-coordinated team at work.
      During development, they use new technologies and libraries, always striving to uplevel.
      They work side-by-side with clients as a partner and they are their digital expert. They advise and influence the design and strategy of the project.
      They are looking for bold clients who are leaders in their field and have innovative, creative ideas. They are attracted to projects which utilize new technologies.
    </div>
  </div>
);

export default PlaceHolderTrip;
