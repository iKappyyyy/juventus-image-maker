import { useState } from 'react';
import { usePopup } from '../../components/PopupProvider';
import playerInfos from '../../data/playerInfos';
import NoChoicePhoto from '../../assets/nochoice.webp';
import './Player.css';

const CARD_ROW_LENGTH = 10;

export function Player({ position, currentPlayers, setCurrentPlayers }) {
  const { openPopup } = usePopup();
  const [photo, setPhoto] = useState(NoChoicePhoto);

  function handleClick() {
    const playerChoices = playerInfos.filter(info => !currentPlayers.includes(`images/players/${info}.webp`)).map(info => (
      <img className="player-choice"
        src={`images/players/${info}.webp`}
        onClick={() => {
          const newCurrentPlayers = [...currentPlayers, `images/players/${info}.webp`].filter(
            player => player !== photo
          );
          setPhoto(`images/players/${info}.webp`);
          setCurrentPlayers(newCurrentPlayers);
        }}
        key={`player-choice-${info}`}
      />
    ));

    openPopup('שחקנים', playerChoices);
  }

  return (
    <div
      className="player"
      style={{
        gridRow: `${position.row} / ${position.row + CARD_ROW_LENGTH}`,
        gridColumn: position.column,
      }}
      onClick={handleClick}
    >
      <img src={photo} className="head" />
    </div>
  );
}