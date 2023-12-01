import H4 from "./H4";
import Paragraph from "./Paragraph";
import Clauses from "./Clauses";
import Ul from "./Ul";

export default function Clause({ data }) {
  const clauses = [];
  const others = [];
  data.children.forEach((child, index) => {
    if (child.type === "clause") clauses.push(child);
    else others.push(child);
  });
  return (
    <li>
      {others.map((element) => {
        switch (element.type) {
          case "h4":
            return <H4 data={element} />;
          case "p":
            return <Paragraph data={element} />;
          case "ul":
            return <Ul data={element} />;
        }
      })}
      <Clauses data={clauses} />
    </li>
  );
}
