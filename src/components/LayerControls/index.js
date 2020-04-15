import React from 'react';
import './index.css';

const LayerControls = ({ imageToggle, imageList }) => (
  <div className="controls" onClick={imageToggle}>
    {imageList.map(({ visible, id, title, url }) => (
      <div key={id}>
        <label>
          <input id={id} type="checkbox" checked={visible} />
          <img src={url} width="60" height="40" border="1" alt="text" />
          {title}
        </label>
      </div>
    ))}
  </div>
);

export default LayerControls;
