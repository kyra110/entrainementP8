import { useParams } from 'react-router-dom';
import livres from '../data/livres.json';

const findLivreID = (id) => {
  return livres.find((livre) => livre.id === id);
};

const Livre = () => {
  const { id } = useParams();
  const livre = findLivreID(id);
  const pictures = livre.pictures;
  return (
    <div className='livre'>
      <div className="pictures">
      {pictures.map((picture, index) => {
        return (
          <img src={picture} alt={picture.title} key={picture,index}/>
        );
      })}
      </div>
      <div className="description">
      <p>Voici le détail du livre avec ID: {id}</p>
      <h2>Titre: {livre.title}</h2>
      <p> <strong>Desciption:</strong> {livre.description}</p>
      <p> <strong>Etoiles: </strong>{livre.rating}</p>
      <p> <strong>Style:</strong> {livre.tags}</p>
      <p> <strong>Autheur: </strong> {livre.author}</p>
      </div>
    </div>
  );
};

export default Livre;