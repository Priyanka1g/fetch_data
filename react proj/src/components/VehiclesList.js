import React from 'react';

import Vehicle from './Vehicles';
import classes from './VehiclesList.module.css';

const VehiclesList = (props) => {
  return (
    <ul className={classes['vehicles-list']}>
      {props.vehicles.map((vehicle) => (
        <Vehicle
          name={vehicle.name}
          model={vehicle.model}
          cost={vehicle.cost}
          mas={vehicle.mas}
          class={vehicle.class}
        />
      ))}
    </ul>
  );
};

export default VehiclesList;
