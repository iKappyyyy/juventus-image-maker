import './ScreenshotButton.css';

function handleScreenshot() {
  console.log('screenshot!');
}

export function ScreenshotButton() {
  return <button className="screenshot-button" onClick={handleScreenshot}>צלם</button>;
}