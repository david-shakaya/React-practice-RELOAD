import defaultImg from "./default-image.jpg";

// url = defaultImg; если картинка не придет с сервера загрузится фото по умочанию
const Paintings = ({ url = defaultImg, title, price, id }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>
        Цена за покупку фото : <strong>{price}грн.</strong>
      </p>
      <p>Id-фотки: {id}</p>
      <img src={url} alt={title} width="300px" />
      <button>Добавить в корзину</button>
    </>
  );
};

export default Paintings;
