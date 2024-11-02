import PropTypes from 'prop-types';
import "./styles.scss";
import { useLocation } from 'react-router-dom';

const PageErreur = () => {
  const location = useLocation();
  const { message, code } = location.state || { message: "Erreur inconnue", code: 500 }; // Valeurs par défaut

  return (
    <div id='erreur-page' className="page-container">
      <div id="erreur">
          {code}
      </div>
      <div className='flex-column'>
      {message}
      
      <a href='/' >Revenir à l'accueil</a>
      </div>
    </div>
  );
};

PageErreur.propTypes = {
  message: PropTypes.string,
  code: PropTypes.int,

};
export default PageErreur;

