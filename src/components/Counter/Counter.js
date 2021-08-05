import { Component } from 'react';
import s from './Counter.module.css';

class Counter extends Component {
  state = {
    value: 1,
  };
  handleIncrement = () => {
    // Обращение к event доступно только в синхронном коде. Для испльзования в асинхронном коде
    // нужно сохранить свойство event в переменную и потом использовать, типа: const target = e.target
    /* Обичное зменение стейта */
    // this.setState({
    //   value:  333,
    // });

    /* Изменение стейта от предыдущего*/
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };

  render() {
    return (
      <div className={s.counter}>
        <button type="button" onClick={this.handleIncrement}>
          Добавить
        </button>
        <span className={s.value}>{this.state.value}</span>
        <button type="button">ОТминусовать</button>
      </div>
    );
  }
}

export default Counter;
