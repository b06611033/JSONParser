import React from "react";

export default function H4({ data }) {
  let text = [];
  data.children.forEach((element) => {
    let subText = element.text;
    if (element.bold) {
      subText = "<b>" + subText + "</b>";
    }
    if (element.underline) {
      subText = "<u>" + subText + "</u>";
    }
    text.push(subText);
  });
  return (
    <>
      {text.map((subText) => (
        <h4 dangerouslySetInnerHTML={{ __html: subText }} />
      ))}
    </>
  );
}
