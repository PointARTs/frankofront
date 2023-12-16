import {FormUser} from "../../Components/Registration/FormUser";
import {useEffect} from "react";

function Stage2({title}) {

    useEffect(()=>{
        window.scrollTo(0, 0)
    })

    useEffect(()=>{
        document.title = `${title} | FrankoLab`
    },[title])

    return (
        <FormUser />
    );
}

export default Stage2;
