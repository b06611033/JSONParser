import H4Printer from "./H4Printer";
import PPrinter from "./PPrinter";
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
            return <H4Printer data={element} />;
          case "p":
            return <PPrinter data={element} />;
          case "ul":
            return <Ul data={element} />;
        }
      })}
      <Clauses data={clauses} />
    </li>
  );
}
