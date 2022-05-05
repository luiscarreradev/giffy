import React from "react";
import '../styles/Gif.css';


const Gif = ({title, id, url}) => {
  return (
    <div className="Gif">
      <h4>{title}</h4>
      <small>{id}</small>
      <img src={url} alt={title} />
    </div>
  );
};

export default Gif;
