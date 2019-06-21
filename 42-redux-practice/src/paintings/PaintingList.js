import React from 'react';
import PaintingListItem from './PaintingListItem';

const PaintingList = ({ paintings }) => {
  const items = paintings.map(pntg => (
    <PaintingListItem key={pntg.id} painting={pntg} />
  ));
  return <div className="ui relaxed divided list scroll">
    {
      items.length > 0
        ? items
        : <h3>No paintings found.</h3>
    }
  </div>;
};

export default PaintingList;
