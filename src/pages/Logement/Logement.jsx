import { useEffect, useState } from "react";
import "./logement.scss";
import { Navigate, useParams } from "react-router-dom";
import { fetchHebergementById } from "../../services/dataService";
import Chips from "../../components/chips/chips";
import Colapse from "../../components/colapse/Colapse";
import Loader from "../../components/loaders/Loader";

const Logement = () => {
  const { id } = useParams();
  const [hebergement, setHebergement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  //#region Appel API
  useEffect(() => {
    const getHebergement = async () => {
      try {
        const data = await fetchHebergementById(id);
        setTimeout(() => {
          setHebergement(data);
          setLoading(false);
        }, 800);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      } 
    };
    

    getHebergement();
  }, [id]);
  //#endregion



  const handleNextImage = () => {
    if (currentIndex < hebergement.pictures.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePreviousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(hebergement.pictures.length - 1);
    }
  };





  //#region RETURN
  if (loading) return <Loader />;
  if (error) return <Navigate to="/erreur" state={{ message: error, code: 404 }} />;

  return (
    <div id="logement-page" className="page-container">
      {/* Carrousel d'images */}
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={handlePreviousImage}>
          <img src="../../public/arrow-left.svg" alt="arrow left" />
        </button>

        <ul className="image-list-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {hebergement.pictures.map((picture, index) => (
            <li key={index} className="image-item">
              <img src={picture} alt={`Image ${index + 1}`} />
            </li>
          ))}
        </ul>

        <button className="carousel-button next" onClick={handleNextImage}>
        <img src="../../public/arrow-right.svg" alt="arrow right" />
        </button>
      </div>

      <div className="logement-information">
        <div className="flex-column">
          <h2 id="titre"> {hebergement.title} </h2>
          <span id="localisation"> {hebergement.location} </span>
          <div id="chips-container">
            {hebergement.tags.map((tag, index) => (
              <Chips key={index} tag={tag} />
            ))}
          </div>
        </div>

        <div>
          <div id="hote">
            <div className="flex-row">
              <div id="name">
                {hebergement.host.name.split(" ")[0]}
                <br />
                {hebergement.host.name.split(" ")[1]}
              </div>
              <div id="photo">
                <img id="image-hote" src={hebergement.host.picture} alt="Host" />
              </div>
            </div>
            <div id="rating">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={
                    i < hebergement.rating
                      ? "../../../public/star.svg"
                      : "../../../public/starEmpty.svg"
                  }
                  alt="rating star"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="colapse-container">
        <Colapse key={1} title={"Description"} content={hebergement.description} type="text" />
        <Colapse key={2} title={"Equipement"} content={hebergement.equipments} type="list" />
      </div>
    </div>
    //#endregion
  );
};

export default Logement;
