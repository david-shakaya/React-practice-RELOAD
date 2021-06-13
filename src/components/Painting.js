import defaultImg from "./default-image.jpg";
import PropTypes from "prop-types";

// url = defaultImg; если картинка не придет с сервера загрузится фото по умочанию

/*
 *  ---Тернарніе операторы---
 *  const isOnlyne = true;
 *  Если isOnlyne === true то рендерим строку онлайн если фолс ничего не рендерим
 *   {isOnlyne && 'Онлайн'}
 *  Если isOnlyne === true то рендерим строку онлайн если фолс рендерим офлайн
 *   {isOnlyne ? 'Онлайн': Офлайн}
 *
 */

const Paintings = ({ url = defaultImg, title, price, id, quantity }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>
        Цена за покупку фото : <strong>{price}грн.</strong>
      </p>
      <p>Id-фотки: {id}</p>
      <img src={url} alt={title} width="300px" />
      <p>Количетсво: {quantity > 5 ? "Еще много" : "ЗАканчивается"} </p>
      <button>Добавить в корзину</button>
    </div>
  );
};

export default Paintings;

Paintings.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  quantity: PropTypes.number,
};
