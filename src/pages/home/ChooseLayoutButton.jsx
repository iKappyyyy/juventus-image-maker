import { Link } from 'react-router';
import './ChooseLayoutButton.css';

export function ChooseLayoutButton({ layout }) {
  return (
    <Link to={`/photo?layout=${layout}`}>
      <button className="done-button js-done-button">סיימתי</button>
    </Link>
  );
}