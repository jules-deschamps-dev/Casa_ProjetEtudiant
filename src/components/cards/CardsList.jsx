import { useEffect } from "react";
import Card from "./Card";
import './cards.scss';
import { useState } from "react";
import { getHebergements } from '../../services/dataService.js';
import Loader from "../loaders/Loader";
import { Navigate } from "react-router-dom";


const CardsList = () => {
  const [hebergements, setHebergements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHebergementsList = async () => {
      try {
        const data = await getHebergements();
        
        setTimeout(() => {
          setHebergements(data);
          setLoading(false);
        }, 800);
      } 
      catch (error) {
        setError(error.message);
        setLoading(false); 
      }
    };
  
    getHebergementsList();
  }, []);
  

  if (loading) return <Loader />;
  if (error) return <Navigate to="/erreur" state={{ message: error, code: 503 }} />;
  return (
    <div id="cardsContainer">
      {
        hebergements.map((hebergement) => (
          <Card key={hebergement.id} hebergement={hebergement} />
        ))
      }
    </div>
  );
  
};

export default CardsList;
