import AgreedmentPage from "./AgreementPage";
import {useEffect} from "react";

function AgreedmentPagePrint() {

    useEffect(()=>{
        window.print()
    },)

    return (
        <>
            <AgreedmentPage />
        </>
    );
}

export default AgreedmentPagePrint;
