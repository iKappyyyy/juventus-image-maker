import { useState } from 'react';
import { usePopup } from '../../../components/PopupProvider';
import { backgroundNames, backgroundsInfo } from '../../../data/backgrounds';
import './ChangeBackgroundButtons.css';

export function ChangeBackgroundButtons({ imageContentRef }) {
  const [estimatedChecked, setEstimatedChecked] = useState(false);
  const { openPopup } = usePopup();
  
  function handleCheckboxButton() {
    const backgroundPath = imageContentRef.current.style.backgroundImage;
    setEstimatedChecked(!estimatedChecked);
    // explanation: estimatedChecked is only going to be updated at the end of the function so the check is actually flipped in this ternary operator
    imageContentRef.current.style.backgroundImage = backgroundPath.replace(estimatedChecked ? 'estimated' : 'official', estimatedChecked ? 'official' : 'estimated');

    // background needs to be manually changed before estimated button starts working so this fixes that edge case
    if (!backgroundPath) imageContentRef.current.style.backgroundImage = "url('images/backgrounds/estimated/championsleague.webp')"; 
  }
  
  function handleChangeBackgroundButton() {
    const backgrounds = [];
    const imagesPath = `images/backgrounds/${estimatedChecked ? 'estimated' : 'official'}`;
    for (let i = 0; i < backgroundNames.length; i++) {
      const currentBackground = backgroundNames[i];
      backgrounds.push(
        <div
          className="background-option"
          key={`background-option-${i}`}
          onClick={() => { imageContentRef.current.style.backgroundImage = `url('${imagesPath}/${currentBackground}.webp')` }}
        >
          <img src={`${imagesPath}/${currentBackground}.webp`} alt={backgroundsInfo[currentBackground].alt} />
          <span>{backgroundsInfo[currentBackground].name}</span>
        </div>
      );
    }

    openPopup(estimatedChecked ? 'רקעים משוערים' : 'רקעים', backgrounds);
  }

  return (
    <>
      <button id="change-background-button" onClick={handleChangeBackgroundButton}>שנה רקע</button>
      <button id="estimated-layout-container" onClick={handleCheckboxButton}>
        <input
          type="checkbox"
          id="estimated-layout-input"
          checked={estimatedChecked}
          onClick={handleCheckboxButton}
          onChange={() => { }}
        />
        הרכב משוער
      </button>
    </>
  );
}