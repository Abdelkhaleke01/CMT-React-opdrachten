import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Animal = ({ animal }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <h2>{animal.name}</h2>
      <img src={animal.imageUrl} alt={animal.name} width={200} />
      <p>Habitat: {animal.habitat}</p>
      <button onClick={() => navigate(`/detail/${animal.id}`)}>
        Meer info
      </button>
    </Card>
  );
};

export default Animal;
