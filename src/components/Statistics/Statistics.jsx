import React from 'react';


const Statistics = (props) => {
  const {title, stats} = props;

  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>
      <ul class="stat-list">
      {stats.map(e => <ListItem e = {e} />)}
      </ul>
    </section>
  )
}

export default Statistics;

const ListItem = ({e}) => {
  return (
    <li id = {e.id} class="item">
    <span class="label">{e.label}</span>
    <span class="percentage">{e.percentage}</span>
  </li>
  );
}