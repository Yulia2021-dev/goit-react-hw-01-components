import React from 'react';
import PropTypes from 'prop-types';
import './statics.scss'

const Statistics = (props) => {
  const {title, stats} = props;

  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map(e => <ListItem key={e.id } e = {e} />)}
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired
}

export default Statistics;

const ListItem = ({e}) => {
  return (
    <li key = {e.id} className="item">
    <span className="label">{e.label}</span>
    <span className="percentage">{e.percentage}</span>
  </li>
  );
}