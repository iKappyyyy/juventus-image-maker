import './ChangeBackgroundMenu.css';

export function ChangeBackgroundMenu() {
  return (
    <div className="background-change-container">
      <button className="change-background js-change-background">שנה רקע</button>
      <div className="background-choices js-background-choices">
      </div>

      <div id="estimated-container">
        <p id="estimated-title">הרכב משוער</p>
        <input type="checkbox" id="estimated" />
      </div>
    </div>
  )
}