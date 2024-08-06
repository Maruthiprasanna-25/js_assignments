import React, { useState } from 'react';

const Tooltip = ({ text, tooltipText }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {text}
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '5px',
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '3px',
          }}
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
