import {FormSurvey} from "../../Components/Registration/FormSurvey";
import {useEffect} from "react";

function Stage4({title}) {
    useEffect(()=>{
        window.scrollTo(0, 0)
    })

    useEffect(()=>{
        document.title = `${title} | FrankoLab`
    },[title])

    return (
        <FormSurvey />
    );
}

export default Stage4;
