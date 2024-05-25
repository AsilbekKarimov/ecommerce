// src/component/other/Divider.jsx

import React from 'react';

const DividerCustom = ({ title, color }) => {
  return (
    <div style={{ color: color }}>
      <hr />
      <h1>{title}</h1>
      <hr />
    </div>
  );
}

export default DividerCustom;
