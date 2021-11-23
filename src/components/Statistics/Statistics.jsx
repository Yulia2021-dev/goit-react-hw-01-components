import React from 'react';
import PropTypes from 'prop-types';
import StatisticsListItem from './StatisticsListItem.jsx'
import './statics.scss'

const Statistics = ({title, stats}) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {stats.map(e => <StatisticsListItem key={e.id } e = {e} />)}
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  stats: PropTypes.array.isRequired
}

export default Statistics;

