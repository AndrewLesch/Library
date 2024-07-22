import {
  faArrowRightFromBracket,
  faBookBookmark,
  faChartPie,
  faSwatchbook,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

export const NavigationPanel = () => {
  return (
    <div className="navigation-panel-container">
      <FontAwesomeIcon icon={faBookBookmark} className="category-panel-icon" />
      <h2 className="icon-description">BookLover</h2>

      <ul className="links-container">
        <ol className="link-container">
          <FontAwesomeIcon icon={faSwatchbook} className="category-link-icon" />
          <h6 className="link-text">Книги</h6>
        </ol>
        <ol className="link-container">
          <FontAwesomeIcon icon={faChartPie} className="category-link-icon" />
          <h6 className="link-text">Статистика</h6>
        </ol>
        <ol className="link-container">
          <FontAwesomeIcon icon={faTrophy} className="category-link-icon" />
          <h6 className="link-text">Достижения</h6>
        </ol>
      </ul>
      <div className="exit-button-container">
        <FontAwesomeIcon
          icon={faArrowRightFromBracket}
          className="category-link-icon"
        />
        <h6 className="link-text">Выйти</h6>
      </div>
    </div>
  );
};
