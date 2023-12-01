import React from 'react';

const PPrinter = ({ value}) => {
  if(value === ".") return(<p>.</p>);
  return (
    <p dangerouslySetInnerHTML={{ __html: value }} />
  );
};
  
  export default PPrinter;