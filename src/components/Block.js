import H1Printer from "./H1Printer";
import PPrinter from "./PPrinter";
import Clauses from "./Clauses";

export default function Block({data}) {
    const clauses = [];
    const others=[];
    data.children.forEach((child, index) => {
        if(index === 5) clauses.push(child.children[0]);
        else if(child.type === "clause") clauses.push(child);
        else others.push(child);
    });
    return (
        <>
        {others.map((data)=>{
            switch(data.type){
                case "h1":
                    return <H1Printer data={data}/>
                case "p":
                    return <PPrinter data={data}/>
                case "block":
                    return <Block data={data}/>
            }
        })}
        <Clauses data={clauses}/>
        </>
    )
}
