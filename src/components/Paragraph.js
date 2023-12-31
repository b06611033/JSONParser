import React from "react";
import Mention from "./Mention";

export default function Paragraph({ data }) {
  let text = [];
  data.children.forEach((element) => {
    let obj;
    if (element.type === "mention") {
      obj = { type: "mention", obj: element };
    } 
    else {
      let subText = element.text;
      if (element.bold) {
        subText = "<b>" + subText + "</b>";
      }
      if (element.underline) {
        subText = "<u>" + subText + "</u>";
      }
      subText = subText.replace(/\n/g, '<br>');

      obj = { type: "text", obj: subText };
    }
    text.push(obj);
  });

  return (
    <>
      {text.map((element) =>
        element.type === "text" ? (
          <p style={{display: "inline"}}>
            <span
              dangerouslySetInnerHTML={{ __html: element.obj }}
            />
          </p>
        ) : (
         <Mention data={element.obj}></Mention>
        )
      )}
      <br></br>
    </>
  );
}
