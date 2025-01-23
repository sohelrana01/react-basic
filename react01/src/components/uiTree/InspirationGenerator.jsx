import Copyright from "./Copyright";
import Fancytext from "./FancyText";
import InsGenerator from "./InsGenerator";

export default function InspirationGenerator(){
    return (
        <>
            <Fancytext title text="Get Inspired App"/>
            <InsGenerator>
                <Copyright year={2025} />
            </InsGenerator>
        </>
    )
}