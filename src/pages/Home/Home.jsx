import CardsList from '../../components/cards/CardsList';
import Header from '../../components/header/Header';
import './Home.scss';

const Home = () => {
  return (
    <div className="page-container">
      <Header img="../../../public/mainImg.webp" txt="Chez vous, partout et ailleurs" />
      <CardsList />
    </div>
  );
};

export default Home;
