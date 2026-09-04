import { createContext, useContext, useState } from 'react';
import { PopupMenu } from './PopupMenu';
const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [popupData, setPopupData] = useState(null);

  const openPopup = (title, content) => setPopupData({ title, content });
  const closePopup = () => setPopupData(null);

  return (
    <PopupContext.Provider value={{ openPopup, closePopup }}>
      {children}

      {popupData && (
        <div className="popup-overlay">
          <PopupMenu title={popupData.title}>
            {popupData.content}
          </PopupMenu>
        </div>
      )}
    </PopupContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePopup = () => useContext(PopupContext);
