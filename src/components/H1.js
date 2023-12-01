import React from "react";
import Mention from "./Mention";

export default function H1({ data }) {
  // console.log(data)
  let text = [];
  data.children.forEach((element) => {
    let obj;
    if (element.type === "mention"){
      obj = {"type": "mention", "obj":element}
    }
    else{
      let subText = element.text;
    if (element.bold) {
      subText = "<b>" + subText + "</b>";
    }
    if (element.underline) {
      subText = "<u>" + subText + "</u>";
    }
    obj = {"type": "text", "obj":subText}
    }
    text.push(obj);
  });

  return (
    <>
      {text.map((element) => (
        element.type === "text"?<h1 dangerouslySetInnerHTML={{ __html: element.obj }} />:<Mention data={element.obj}></Mention>
      ))
      }
    </>
  );
}