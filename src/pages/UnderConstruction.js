import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../underConstruction.css';

export default function UnderConstruction() {
  return (
    <div className="container under-construction">
      <FontAwesomeIcon icon={faPersonDigging} size="3x" />
      <h2>Working Zone - Fines are doubled</h2>
    </div>
  );
};

