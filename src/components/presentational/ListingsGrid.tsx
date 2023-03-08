import React from 'react';

export const ListingsGrid = ({ children }: any) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        maxWidth: '800px',
      }}
    >
      {children}
    </div>
  );
};
