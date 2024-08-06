// HookComponent.js
import React, { useState } from 'react';

const HookComponent = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name is: {name}</p>
    </div>
  );
};

export default HookComponent;
