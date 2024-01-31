import React, { useState } from 'react';


const ListItem = ({ item, onClick, expanded }) => {
  return (
    <div className="list-item" onClick={onClick}>
      <div className="item-title">{item.title}</div>
      {expanded && <div className="item-details">{item.details}</div>}
    </div>
  );
};

const Day = () => {
  const [list, setList] = useState([
    
    { id: 1, title: 'Item 1', details: 'Details for Item 1' },
    
  ]);
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (itemId) => {
    setExpandedItem(itemId === expandedItem ? null : itemId);
  };

  return (
    <div className="expanding-list">
      {list.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          onClick={() => handleItemClick(item.id)}
          expanded={item.id === expandedItem}
        />
      ))}
    </div>
  );
};

export default Day;