import { useState } from 'react';
import { Player } from './Player';
import photoPositions from '../../data/photoPositions';

export function Players({ layoutString, playerAmount }) {
  const [currentPlayers, setCurrentPlayers] = useState([]);
  const photoPosition = photoPositions[layoutString];

  return (
    <>
      {Array.from({ length: playerAmount }, (_, i) => {
        const playerId = `player${i + 1}`;
        return (
          <Player
            key={playerId}
            position={photoPosition[playerId]}
            currentPlayers={currentPlayers}
            setCurrentPlayers={setCurrentPlayers}
          />
        );
      })}
    </>
  );
}
