import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Thumb = ({ livres }) => {
  return (
    livres.map((livre) => (
      <Link to={`/livre/${livre.id}`} className="thumb" key={livre.id}>
        <img src={livre.cover} alt={livre.title} />
        <h3>{livre.title}</h3>
      </Link>
    ))
  );
};

Thumb.propTypes = {
  livres: PropTypes.array.isRequired
};

export default Thumb;

