import React from 'react';

const Body = ({ data }) => {
  return (
    <div>
      {data.map(image => (
        <div key={image.id} className="column">
          <img src={image.img} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Body;
