import React from 'react';

const H4Printer = ({ value}) => {
  return (
    <h4 dangerouslySetInnerHTML={{ __html: value }} />
  );
};
  
  export default H4Printer;