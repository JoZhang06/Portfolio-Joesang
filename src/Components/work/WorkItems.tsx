import React from 'react';

const WorkItems = ({ item }) => {
  return (
    <div className="work-card" key={item.id}>
      <img src={item.image} alt="" className="work-img" />
      <h3 className="work-title">{item.name}</h3>
      <a href={item.link} className="work-button">
        Go to page <i className="bx bx-right-arrow-alt work-button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;