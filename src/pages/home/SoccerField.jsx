import { layoutPositions } from '../../data/layoutPositions'
import SoccerFieldBackground from '../../assets/soccerFieldBackground.webp';
import './SoccerField.css';

export function SoccerField({ layout, playerAmount }) {
  const layoutPosition = layoutPositions[layout];
  const players = [];
  for (let i = 0; i < playerAmount; i++) {
    const playerId = `player${i + 1}`;

    players.push(
      <div
        className="player"
        key={`homepage-soccerfield-${playerId}`}
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