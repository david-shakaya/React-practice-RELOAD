import s from './ColorPicker.module.css';

const ColorPicker = ({ options }) => {
  return (
    <div className={s.wrapper}>
      <h2>Color Picker</h2>
      <ul className={s.list}>
        {options.map(option => {
          return (
            <li className={s.item} key={option.color}>
              <h3>{option.label}</h3>
              <div
                className={s.text}
                style={{ backgroundColor: option.color }}
              ></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ColorPicker;
