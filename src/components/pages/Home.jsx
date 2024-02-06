import Thumb from "../Thumb";
import livres from "../../data/livres.json";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <img src="/images/horizon-HD.webp" alt="Lisez, chez vous et ailleurs" />
      <h1>Lisez, chez vous et ailleurs</h1>
      </div>
      <div className="gallery">
        <Thumb livres={livres} />
      </div>
    </div>
  );
};

export default Home;
