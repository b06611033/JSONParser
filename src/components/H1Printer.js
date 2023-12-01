import React from 'react';

// Functional component that takes a 'value' prop
const H1Printer = ({ value}) => {
  return (
    <h1 dangerouslySetInnerHTML={{ __html: value }} />
  );
};

export default H1Printer;