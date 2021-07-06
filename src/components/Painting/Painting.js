import defaultImg from './default-image.jpg';
import PropTypes from 'prop-types';

// url = defaultImg; если картинка не придет с сервера загрузится фото по умочанию

/*
 *  ---Тернарніе операторы---
 *  const isOnlyne = true;
 *  Если isOnlyne === true то рендерим строку онлайн если фолс ничего не рендерим
 *   {isOnlyne && 'Онлайн'}
 *  Если isOnlyne === true то рендерим строку онлайн если фолс рендерим офлайн
 *   {isOnlyne ? 'Онлайн': Офлайн}
 * Если isOnlyne === true то рендерим строку онлайн если фолс рендерим офлайн
 * { isOnlyne ?? OFline}
 *
 */

const Painting = ({ url = defaultImg, title, price, id, quantity }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>
        Цена за покупку фото : <strong>{price}грн.</strong>
      </p>
      <p>Id-фотки: {id}</p>
      <img src={url} alt={title} width="300px" />
      <p>Количетсво: {quantity > 5 ? 'Еще много' : 'ЗАканчивается'} </p>
      <button>Добавить в корзину</button>
    </div>
  );
};

export default Painting;

Painting.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
