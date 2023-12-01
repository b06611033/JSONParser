import React from 'react';

// Functional component that takes a 'value' prop
const ClausePrinter = ({ value }) => {
  return (
    <div>
      <ol>{value}</ol>
    </div>
  );
};

export default ClausePrinter;