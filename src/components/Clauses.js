
import Clause from "./Clause";

export default function Clauses({ data }) {
  return (
    <ol>
      {data.map((element, index) => (
        <Clause key={index} data={element} />
      ))}
    </ol>
  );
}