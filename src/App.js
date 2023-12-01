import Block from "./components/Block";

function App() {
  const sample = require("./input.json");
  return (
    <>
      <Block data={sample[0]} />
    </>
  );
}
export default App;
