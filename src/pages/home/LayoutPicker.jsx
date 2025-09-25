import './layoutPicker.css';

export function LayoutPicker({ layoutIndex, setLayoutIndex, layoutOptions }) {
  function handleLeft() {
    if (layoutIndex <= 0) setLayoutIndex(layoutOptions.length - 1);
    else setLayoutIndex(currentIndex => currentIndex - 1);
  }

  function handleRight() {
    if (layoutIndex >= layoutOptions.length - 1) setLayoutIndex(0);
    else setLayoutIndex(currentIndex => currentIndex + 1);
  }

  return (
    <div className="cycle-container">
      <h1 className="cycle-header">סוג מערך</h1>
      <div className="cycle-buttons-container">
        <button className="cycle-arrow" onClick={handleLeft}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <div className="cycle-option">{layoutOptions[layoutIndex]}</div>
        <button className="cycle-arrow" onClick={handleRight}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}