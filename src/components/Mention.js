import React from "react";
import {useState} from "react";

const Mention = ({ data }) => {
  const[number, setNumber] = useState(data.children[0].text);

  return (
    <p style={{ display: "inline" }}>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={{backgroundColor: data.color, color: "white", textAlign: "center"}}
      />
    </p>
  );
};

export default Mention;