import React from 'react';

const LicPrinter = ({ value}) => {
  return (
    <li dangerouslySetInnerHTML={{ __html: value }} />
  );
};
  
  export default LicPrinter;