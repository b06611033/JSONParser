import Clause from "./Clause";

export default function Clauses({ data, layer }) {
  return (
    <>
    {layer === 0 ? (
      <ol type="1">
        {data.map((element, index) => (
          <Clause key={index} data={element} layer={layer} />
        ))}
      </ol>
    ) : layer === 1 ? (
      <ol type = "a">
        {data.map((element, index) => (
          <Clause key={index} data={element} layer={layer} />
        ))}
      </ol>
    ) : null}
  </>
  );
}
