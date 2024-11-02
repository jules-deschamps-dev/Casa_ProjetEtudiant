import React, { useEffect, useState } from "react";
import { getAboutData } from "../../services/dataService";
import Header from "../../components/header/Header";
import Colapse from "../../components/colapse/Colapse";
import "./About.scss";
import Loader from "../../components/loaders/Loader";

const About = () => {
  const [aboutContent, setAboutContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Appelle la fonction getAboutData pour charger le JSON
    const fetchData = async () => {
      try {
        const data = await getAboutData();
        setAboutContent(data);
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;
  else
    return (
      <div id="about-page" className="page-container">
        <Header img="../../../public/about.png" />

        {aboutContent.map((item) => (
          <Colapse
            key={item.id}
            title={`Section ${item.id}`}
            content={item.content}
            type="text"
          />
        ))}
      </div>
    );
};

export default About;
