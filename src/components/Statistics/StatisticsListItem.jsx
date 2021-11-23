const StatisticsListItem = ({e}) => {
  return (
    <li key = {e.id} className="item">
    <span className="label">{e.label}</span>
    <span className="percentage">{e.percentage}</span>
  </li>
  );
}

export default StatisticsListItem;