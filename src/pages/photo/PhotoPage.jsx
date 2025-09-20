import { useSearchParams } from 'react-router';
import { ChangeBackgroundMenu } from './ChangeBackgroundMenu';
import { ChangePlayerMenu } from './ChangePlayerMenu';
import { ScreenshotButton } from './ScreenshotButton';
import photoPositions from '../../data/photoPositions';
import NoChoicePhoto from '../../assets/nochoice.webp';
import photoo from '../../assets/backgrounds/championsLeague.webp';
import './PhotoPage.css';

// this defines how many rows one card is gonna take
const CARD_ROW_LENGTH = 10;

export function PhotoPage({ playerAmount }) {
  const [searchParams] = useSearchParams();
  const layoutString = searchParams.get('layout');
  const photoPosition = photoPositions[layoutString];

  const players = [];
  for (let i = 0; i < playerAmount; i++) {
    const playerId = `player${i + 1}`;

    players.push(
      <div
        className="player"
        key={`photopage-choose-${playerId}`}
        data-player=""
        style={{
          gridRow: `${photoPosition[playerId].row} / ${photoPosition[playerId].row + CARD_ROW_LENGTH}`,
          gridColumn: photoPosition[playerId].column,
        }}
      >
        <img src={NoChoicePhoto} className="head" />
      </div>
    )
  }

  return (
    <>
      <div className="image-content js-image-content">
        <img className="background-image js-background-image" src={photoo} />
        {players}
        <ChangeBackgroundMenu />
      </div>

      <ChangePlayerMenu />
      <ScreenshotButton />
    </>
  );
}