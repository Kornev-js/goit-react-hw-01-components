import { StatisticBox } from "./style";
import PropTypes from 'prop-types';


const RandomBGColor = function () {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let color = '#' + randomColor;
  return color;
}

export default function Statistics(props) {
  return (
    <StatisticBox>
      {props.title ? <h2 className="title">Upload stats</h2> : ''}
      <ul className="stat-list">
        {props.stats.map(item => (
          <li className="item" key={item.id} style={{backgroundColor: RandomBGColor()}}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </StatisticBox>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  )


}