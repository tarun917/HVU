// src/ThreeJs/containers/BuildingContainer.jsx
import React, { useState, useEffect } from 'react';
import Building from '../components/Building';

const BuildingContainer = () => {
  const [buildingPosition, setBuildingPosition] = useState([0, 0, 0]);
  const [buildingScale, setBuildingScale] = useState([1, 1, 1]);
  const [buildingRotation, setBuildingRotation] = useState([0, 0, 0]);

  useEffect(() => {
    // Example: Fetch building data or update state
  }, []);

  return (
    <Building
      position={buildingPosition}
      scale={buildingScale}
      rotation={buildingRotation}
    />
  );
};

export default BuildingContainer;