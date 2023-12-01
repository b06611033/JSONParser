import Lic from "./Lic"

export default function Ul({data}) {
    return(
        <ul>
            {data.children.map((element)=>(
                <Lic data={element}/>
            ))}
        </ul>
    )

}