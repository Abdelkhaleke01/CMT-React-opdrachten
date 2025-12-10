import { useParams, useNavigate } from "react-router-dom";
import animals from "../component/animals";

const DetailPage = () => {
  const { animalId } = useParams();
  const navigate = useNavigate();

  const animal = animals.find((a) => a.id === Number(animalId));

  if (!animal) return <p>Dier niet gevonden.</p>;

  return (
    <section className="detail-page">
      <h1>{animal.name}</h1>
      <img src={animal.imageUrl} alt={animal.name} width={300} />

      <p><strong>Habitat:</strong> {animal.habitat}</p>
      <p><strong>Voeding:</strong> {animal.diet}</p>
      <p>{animal.description}</p>

      <button onClick={() => navigate(-1)}>Terug</button>
    </section>
  );
};

export default DetailPage;
