/* eslint-disable react/prop-types */

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ hebergement }) => {
  return (
    <Link to={`logement/${hebergement.id}`} className="card-link">
      <div className="card">
        <img src={hebergement.cover} alt={hebergement.description} />
        <span>{hebergement.title}</span>
      </div>
    </Link>
  );
};


export default Card;
