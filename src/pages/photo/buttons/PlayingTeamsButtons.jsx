import { useState } from 'react';
import { usePopup } from '../../../components/PopupProvider';
import { backgroundsInfo } from '../../../data/backgrounds';
import teams from '../../../data/teams';
import './PlayingTeamsButtons.css';

export function PlayingTeamsButtons({ imageContentRef }) {
  // default is the tiniest gif ever, its size is 26 bytes (gg)
  const [teamOne, setTeamOne] = useState('data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=');
  const [teamTwo, setTeamTwo] = useState('data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=');
  const { openPopup } = usePopup();

  function handleOpenPlayingTeamsMenu(setFunc) {
    const imageUrl = imageContentRef.current.style.backgroundImage || 'image/backgrounds/official/championsleague.jpg';
    const filename = imageUrl.match(/([^/]+)(?=\.\w+['"]?\)?;?$)/)[1];

    const layoutLogoNames = teams[filename];
    const teamLogos = [];
    for (let i = 0; i < layoutLogoNames.length; i++) {
      // if (teamOne === `images/teams/${layoutLogoNames[i]}.webp` || teamTwo === `images/teams/${layoutLogoNames[i]}.webp`) continue;
      teamLogos.push(
        <img
          key={`team-logo-option-${layoutLogoNames[i]}`}
          className="team-logo-option"
          src={`images/teams/${layoutLogoNames[i]}.webp`}
          onClick={() => {
            setFunc(`images/teams/${layoutLogoNames[i]}.webp`);
          }} />
      );
    }

    openPopup(`קבוצות ${backgroundsInfo[filename].name}`, teamLogos);
  }

  return (
    <div className="playing-teams-buttons-container">
      <button className="playing-teams-button" onClick={() => handleOpenPlayingTeamsMenu(setTeamOne)}>
        <img src={teamOne} className="team-logo" />
      </button>
      <button className="playing-teams-button" onClick={() => handleOpenPlayingTeamsMenu(setTeamTwo)}>
        <img src={teamTwo} className="team-logo" />
      </button>
    </div>
  );
}