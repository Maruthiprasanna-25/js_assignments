import React from 'react';

const MemoComponent = React.memo(({ item }) => {
  console.log('Rendering MemoComponent');
  return <div>{item}</div>;
});

export default MemoComponent;
