import animals from './src/component/animals.js'; 
import { useParams, useNavigate } from 'react-router-dom';
import DetailPage from './pages/DetailPage'; 
const Product = ({ product, onShowDetail }) => {
  return (
    <section>
      <h2>{product.name}</h2>
      <p>€{product.price}</p>
      <button onClick={() => onShowDetail(product.id)}>
        Meer info
      </button>
    </section>
  );
};

export default Product;