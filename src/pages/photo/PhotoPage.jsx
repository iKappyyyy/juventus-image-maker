import { useRef } from 'react';
import { useSearchParams } from 'react-router';
import { PopupProvider } from '../../components/PopupProvider';
import { Players } from './Players';
import { PlayingTeamsButtons } from './buttons/PlayingTeamsButtons';
import { ButtonsRow } from './buttons/ButtonsRow';
import './PhotoPage.css';

export function PhotoPage({ playerAmount }) {
  const imageContentRef = useRef(null);
  const coachImageRef = useRef(null);
  const [searchParams] = useSearchParams();
  const layoutString = searchParams.get('layout');

  return (
    <PopupProvider>
      <div className="image-content" ref={imageContentRef}>
        <div className="players-grid">
          <Players layoutString={layoutString} playerAmount={playerAmount} /> 
        </div>

        <img className="coach-image" ref={coachImageRef} />
        <PlayingTeamsButtons imageContentRef={imageContentRef} />
      </div>

      <ButtonsRow imageContentRef={imageContentRef} coachImageRef={coachImageRef} />
    </PopupProvider>
  );
}