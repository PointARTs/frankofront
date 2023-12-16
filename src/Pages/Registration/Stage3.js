import {FormHealthStatus} from "../../Components/Registration/FormHealthStatus";
import {useEffect} from "react";

function Stage3({title}) {
    useEffect(()=>{
        window.scrollTo(0, 0)
    })

    useEffect(()=>{
        document.title = `${title} | FrankoLab`
    },[title])

    return (
        <FormHealthStatus />
    );
}

export default Stage3;
