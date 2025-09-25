import { ChangeBackgroundButtons } from './ChangeBackgroundButtons';
import { ChangeCoachButton } from './ChangeCoachButton';
import { ScreenshotButton } from './ScreenshotButton';
import './ButtonsRow.css';

export function ButtonsRow({ imageContentRef, coachImageRef }) {
  return (
    <div id="buttons-row">
      <div id="non-screenshot-buttons-container">
        <ChangeBackgroundButtons imageContentRef={imageContentRef} />

        <ChangeCoachButton coachImageRef={coachImageRef} />
      </div>


      <ScreenshotButton imageContentRef={imageContentRef} />
    </div>
  );
}