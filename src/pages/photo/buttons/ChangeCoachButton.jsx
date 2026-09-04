import { usePopup } from '../../../components/PopupProvider';
import coaches from '../../../data/coaches';
import './ChangeCoachButton.css';

export function ChangeCoachButton({ coachImageRef }) {
  const { openPopup } = usePopup();

  function handleChangeCoachButton() {
    const coachOptions = [];
    for (let i = 0; i < coaches.length; i++) {
      coachOptions.push(
        <img
          key={`coach-option-${coaches[i]}`}
          className="coach-option"
          src={`images/coaches/${coaches[i]}.webp`}
          onClick={() => {
            coachImageRef.current.src = `images/coaches/${coaches[i]}.webp`;
          }}
        />
      )
    }
    openPopup('מאמנים', coachOptions);
  }

      return (
      <button id="change-coach-button" onClick={handleChangeCoachButton}>
        <i className="fa-solid fa-shirt"></i>
        <span>שנה מאמן</span>
      </button>
      )
}