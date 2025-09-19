import layoutPositions from '../../data/layoutPositions'
import SoccerFieldBackground from '../../assets/soccerFieldBackground.png';
import './SoccerField.css';

const PLAYER_AMOUNT = 11;

export function SoccerField({ layout }) {
  const layoutPosition = layoutPositions[layout];
  const players = [];
  for (let i = 0; i < PLAYER_AMOUNT; i++) {
    const playerId = `player${i + 1}`;

    players.push(
      <div
        className="player js-player"
        id={playerId}
        key={playerId}
        style={{
          gridRow: layoutPosition[playerId].row,
          gridColumn: layoutPosition[playerId].column,
        }}
      ></div>
    );
  }

  return (
    <div className="soccer-field">
      <img src={SoccerFieldBackground} className="soccer-field-background" />
      {players}
    </div>
  );
}