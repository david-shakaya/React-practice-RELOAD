import Painting from "./Painting";

function PaintingList({ items }) {
  return (
    <ul>
      {items.map((el) => (
        <li key={el.id}>
          <Painting
            url={el.url}
            title={el.title}
            price={el.price}
            id={el.id}
            quantity={el.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

export default PaintingList;
