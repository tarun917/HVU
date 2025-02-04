// src/ThreeJs/containers/VehicleContainer.jsx
import React, { useState, useEffect } from 'react';
import Vehicle from '../components/Vehicle';

const VehicleContainer = () => {
  const [vehiclePosition, setVehiclePosition] = useState([0, 0, 0]);
  const [vehicleScale, setVehicleScale] = useState([1, 1, 1]);
  const [vehicleRotation, setVehicleRotation] = useState([0, 0, 0]);

  useEffect(() => {
    // Example: Fetch vehicle data or update state
  }, []);

  return (
    <Vehicle
      position={vehiclePosition}
      scale={vehicleScale}
      rotation={vehicleRotation}
    />
  );
};

export default VehicleContainer;