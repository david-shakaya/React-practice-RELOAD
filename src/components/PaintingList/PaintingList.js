import PropTypes from 'prop-types';
import Painting from '../Painting/Painting';
import s from './PaintingList.module.css';

function PaintingList({ items }) {
  return (
    <ul className={s.list}>
      {items.map(item => (
        <li key={item.id}>
          <Painting
            url={item.url}
            title={item.title}
            price={item.price}
            id={item.id}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
export default PaintingList;
