import React from 'react';

const LicPrinter = ({data}) => {
  const value = data.children[0].children[0].text
  return (
    <li> 
      {value}
    </li>
  );
};
  
  export default LicPrinter;