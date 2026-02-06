import { useState, useRef, useEffect } from 'react';
import './AddCustomDataButton.css';

export function AddCustomDataButton() {
  const [visible, setVisible] = useState(false);
  const textRef = useRef(null);

  function handleToggle(e) {
    e.stopPropagation(); // prevent document click
    const isNowVisible = !visible;

    if (isNowVisible) {
      textRef.current.style.visibility = "visible";
    } else {
      textRef.current.style.visibility = "hidden";
    }

    setVisible(isNowVisible);
  }

  useEffect(() => {
    if (!visible) return;

    function handleClickOutside() {
      setVisible(false);
      textRef.current.style.visibility = "hidden";
    }

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [visible]);

  return (
    <div className="add-data-button">
      <button className="add-data-explanation-button" onClick={handleToggle}>
        ?
        <span className="add-data-explanation-text" ref={textRef}>
          <u><strong>הוספת תמונה עצמאית</strong></u>
          <span className="add-data-explanation-list">
            <span className="add-data-explanation-list-item">אפשרות להוסיף תמונות מהמכשיר שלך שלא קיימות באתר</span>
            <span className="add-data-explanation-list-item">התמונה לא תישמר בשום מקום!</span>
          </span>
        </span>
      </button>
      <i className="fa-solid fa-plus"></i>
    </div>
  );
}