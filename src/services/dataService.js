
export const getHebergements = async () => {
  try {
    const response = await fetch('../../public/data.json');

    if (!response.ok) throw new Error();
    return await response.json();
  } 
  catch (error) {
    console.error("Erreur dans la récupération de la liste d'hébergement", error);
    throw new Error("Erreur dans la récupération de la liste d'hébergement");
  }
};


export const fetchHebergementById = async (id) => {
  try {
    const list = await getHebergements();
    const hebergement = list.find(item => item.id === id);
    if (!hebergement) {
      throw new Error('Hébergement non trouvé');
    }
    return hebergement;
  } catch (error) {
    console.error("Hébergement non trouvé : ", error);
    throw new Error("Cette page n'existe pas", 404);
  }
  // TODO: Rajouter un code erreur pour différencier erreur 404 et 503
};

export const getAboutData = async () => {
  try {
    const response = await fetch('../../public/about.data.json');

    if (!response.ok) throw new Error();
    return await response.json();
  } 
  catch (error) {
    console.error("Erreur dans la récupération des données", error);
    throw new Error("Erreur dans la récupération des donnéest");
  }
};


