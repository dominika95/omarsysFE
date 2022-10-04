import './index.scss';
import { arrowIcon } from '../../icons';

export default function Header() {
    return (
      <header className="my-header">
        <span>Manage Reward Plan</span>
        <button className="header-button">
          {arrowIcon}
        </button>
      </header>
    )
}