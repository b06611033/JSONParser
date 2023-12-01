import LicPrinter from "./LicPrinter"

export default function Ul({data}) {
    return(
        <ul>
            {data.children.map((element)=>(
                <LicPrinter data={element}/>
            ))}
        </ul>
    )

}