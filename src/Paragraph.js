import {ThemeContext} from "./App";
import {useContext} from "@types/react";


function Paragraph() {

    const theme = useContext(ThemeContext);

    console.log();
    return(
        <>
            <p className={theme}>Context provides a way to pass data through the component tree without having to pass</p>
        </>
    )
}

export default Paragraph;
