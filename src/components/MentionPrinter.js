import React from 'react';

const MentionPrinter = ({ value }) => {
    return (
      <div>
        <mention>{value}</mention>
      </div>
    );
  };
  
export default MentionPrinter;