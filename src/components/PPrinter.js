import React from 'react';

const PPrinter = ({ value}) => {
  return (
    <p dangerouslySetInnerHTML={{ __html: value }} />
  );
};
  
  export default PPrinter;