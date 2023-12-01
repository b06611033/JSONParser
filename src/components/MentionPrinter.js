import React from "react";

const MentionPrinter = ({ data }) => {
  console.log(data);
  return (
    <p style={{ display: "inline" }}>
      <span dangerouslySetInnerHTML={{ __html: data.children[0].text }} style={{backgroundColor: data.color}} />
    </p>
  );
};

export default MentionPrinter;
