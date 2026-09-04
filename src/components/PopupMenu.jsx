import React from 'react';
import JuventusLogo from '../assets/JuvLogo.webp';
import { usePopup } from './PopupProvider';
import './PopupMenu.css';

export function PopupMenu({ title, children }) {
  const { closePopup } = usePopup(); // get close function from context

  function handleChildClick(child) {
    return (event) => {
      if (child.props.onClick) {
        child.props.onClick(event);
      }
      closePopup();
    };
  }

  const newChildren = React.Children.map(children, child => {
    return React.cloneElement(child, {
      onClick: handleChildClick(child)
    });
  });

  function handleClosePopup() {
    closePopup();
  }

  return (
    <div className="popup">
      <div className="popup-header">
        <img src={JuventusLogo} className="popup-logo" alt="Juventus logo" />
        <span className="popup-title">{title}</span>
        <button className="popup-close-button" onClick={handleClosePopup}>
          <i className="fa-solid fa-x"></i>
        </button>
      </div>
      <div className="popup-content">
        {newChildren}
      </div>
    </div>
  );
}