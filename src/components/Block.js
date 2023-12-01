import H1 from "./H1";
import Paragraph from "./Paragraph";
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
                    return <H1 data={data}/>
                case "p":
                    return <Paragraph data={data}/>
                case "block":
                    return <Block data={data}/>
            }
        })}
        <Clauses data={clauses}/>
        </>
    )
}
