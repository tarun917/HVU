import React from 'react';
import { Canvas } from '@react-three/fiber';
import Building from './ThreeJs/components/Building';
import GameZone from './ThreeJs/gameZone/GameZone';
import Server from './ThreeJs/multiplayer/Server';
import Client from './ThreeJs/multiplayer/Client';
import Lobby from './ThreeJs/multiplayer/Lobby';
import PhysicsScene from './ThreeJs/physics/Physics';
import Ground from './components/Ground';

const App = () => {
  return (
    <Canvas>
      <AuditoriumSeats 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
        rows={5} 
        columns={10} 
      />
      <Bench 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
      />
      <Bike 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
        modelPath="/path/to/your/bike/model.glb" 
      />
      <Birds 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
        modelPath="/path/to/your/birds/model.glb" 
      />
      <Bookshelf 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
      />
      <BoundaryWall 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
        length={10} 
        height={2} 
      />
      <Building 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
        modelPath="/path/to/your/building/model.glb" 
      />
      <Bus 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
        modelPath="/path/to/your/bus/model.glb" 
      />
      <CafeteriaTables 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
        rows={3} 
        columns={3} 
      />
      <Car 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
        modelPath="/path/to/your/car/model.glb" 
      />
      <Chair 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
      />
      <ClassroomDesks 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
        rows={3} 
        columns={3} 
      />
      <Clouds 
        position={[0, 10, 0]} 
        scale={[1, 1, 1]} 
        cloudCount={5} 
      />
      <Dog 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
        modelPath="/path/to/your/dog/model.glb" 
      />
      <DormitoryBeds 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
        rows={2} 
        columns={2} 
      />
      <Flowers 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
        flowerCount={10} 
      />
      <Fountain 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
      />
      <Grass 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
        grassCount={1000} 
      />
      <Ground /> {/* Add the Ground component */}
      <LibraryBooks 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
        bookCount={50} 
      />
      <ParkingMeter 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
      />
      <Parrot 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
      />
      <Plant 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
        leafCount={10} 
      />
      <Rain 
        position={[0, 0, 0]} 
        count={1000} 
      />
      <Robot 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
      />
      <StreetLight 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
      />
      <Table 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
      />
      <TrashCan 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
      />
      <Tree 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
      />
      <Vehicle 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
        modelPath="/path/to/your/vehicle/model.glb" 
      />
      <WaterFeatures 
        position={[0, 0, 0]} 
        scale={[1, 1, 1]} 
      />
      <GameZone />
      <Server />
      <Client />
      <Lobby />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} castShadow />
      <PhysicsScene />

    </Canvas>
  );
};

export default App;