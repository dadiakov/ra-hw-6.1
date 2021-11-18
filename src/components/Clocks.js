import Clock from "./Clock";
import PropTypes from 'prop-types';

export default function Clocks({ clocks, onRemove }) {
    return clocks.map((e) => {
      return <Clock timer={e} key={e.id} onRemove={onRemove} />;
    });
}

Clock.propTypes = {
    timer: PropTypes.object.isRequired,
    onRemove: PropTypes.func,
  }
  
Clock.defaultProps = {
    onRemove: () => console.log('Тут должна быть функция кнопки удаления часов'),
}