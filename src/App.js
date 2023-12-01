import H1Printer from "./components/H1Printer";
import PPrinter from "./components/PPrinter";
import H4Printer from "./components/H4Printer";
import LicPrinter from "./components/LicPrinter";
import MentionPrinter from "./components/MentionPrinter";
import ClausePrinter from "./components/ClausePrinter";

class Obj {
  constructor(type, text, liNum, color) {
    this.type = type;
    this.text = text;
    this.color = color;
    this.liNum = liNum;
  }
}

function App() {
  const sample = require("./input.json");

  let liVal = 0;

  function dfs(obj, type = "") {
    const result = [];

    function traverse(node, currentType, currentColor) {
      if (!node) {
        return;
      }

      // Visit the current node
      if (node.type) {
        currentType = node.type;
        if (node.type === "li") {
          liVal += 1;
        }
      }
      if (node.color) {
        currentColor = node.color;
      }
      if (node.text) {
        let inputText;
        if (node.bold) {
          inputText = "<strong>" + node.text + "</strong>";
          //inputText = node.text;
        } else {
          inputText = node.text;
        }
        let finalText;
        if(node.underline) {
          finalText = "<u>" + inputText + "</u>";
        }
        else {
          finalText = inputText
        }
        const text = new Obj(currentType, finalText, liVal, currentColor);
        result.push(text);
      }

      // Recursive call for each child
      if (node.children && node.children.length > 0) {
        node.children.forEach((child) => traverse(child, currentType));
      }
    }

    traverse(obj, type);
    return result;
  }

  const output = dfs(sample[0], "", "");

  const combinedOutput = output.reduce((acc, obj) => {
    const lastIndex = acc.length - 1;
    console.log(obj.text.substring(0, 1));
    console.log(obj.text);
    if (
      (lastIndex >= 0 &&
        acc[lastIndex].type === obj.type &&
        obj.type !== "lic") ||
      (obj.type === "lic" && acc[lastIndex].liNum === obj.liNum) ||
      obj.type === "mention"
    ) {
      // Combine text for the same type
      acc[lastIndex].text += "" + obj.text;
    } else {
      // Add a new object to the accumulator
      acc.push(new Obj(obj.type, obj.text, obj.liNum, obj.color));
    }

    return acc;
  }, []);

  const finalOutput = combinedOutput.flatMap((obj) => {
    if (obj.text.includes('\n')) {
      const textArray = obj.text.split('\n').filter((text) => text.trim() !== '');
      return textArray.map((text) => new Obj(obj.type, text));
    } else {
      console.log(obj.text);
      return obj;
    }
  });
  

  // Perform DFS starting from the root of the object
  return (
    <div>
      {finalOutput.map((obj, index) => {
        // Check the type and render the corresponding printer
        switch (obj.type) {
          case "h1":
            return <H1Printer value={obj.text} />;
          case "p":
            return <PPrinter value={obj.text} />;
          case "lic":
            return <LicPrinter value={obj.text} />;
          case "h4":
            return <H4Printer value={obj.text} />;
          case "mention":
            return <MentionPrinter value={obj.text} />;
          case "clause":
            return <ClausePrinter value={obj.text} />;

          default:
            return null;
        }
      })}
    </div>
  );
}

export default App;
