import React from 'react';

import classes from './Vehicles.module.css';

const Vehicle = (props) => {
  return (
    <li className={classes.vehicle}>
      <h2>{props.name}</h2>
      <h3>{props.model}</h3>
      <p>Cost:{props.cost}</p>
      <p>Max atmosphering speed:{props.mas}</p>
      <p>Class:{props.class}</p>
    </li>
  );
};

export default Vehicle;
