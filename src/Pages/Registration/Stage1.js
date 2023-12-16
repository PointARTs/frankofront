import {FormAgree} from "../../Components/Registration/FormAgree";
import {useEffect} from "react";

function Stage1({title}) {

    useEffect(()=>{
        document.title = `${title} | FrankoLab`
    },[title])

    return (
        <FormAgree />
    );
}

export default Stage1;
