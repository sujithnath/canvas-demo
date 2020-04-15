import React from 'react';
import './index.css';

const LayerControls = ({ imageToggle, imageList }) => (
  <div className="controls" onClick={imageToggle}>
    <h3>
      Controls
      <span className="mini-info">(Click label to hide/show images)</span>
    </h3>
    {imageList.map(({ visible, id, title, url }) => (
      <label key={id}>
        <input id={id} type="checkbox" checked={visible} />
        <img src={url} width="60" height="40" border="1" alt="text" />
        {title}
      </label>
    ))}
  </div>
);

export default LayerControls;
