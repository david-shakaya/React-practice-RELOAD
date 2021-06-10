// import React from 'react';

const Paintings = ({ url, title, price, id }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>
        Цена за покупку фото : <strong>{price}грн.</strong>
      </p>
      <p>Id-фотки: {id}</p>
      <img src={url} alt={title} />
    </>
  );
};

export default Paintings;
