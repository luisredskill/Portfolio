import "../CSS/Switch.css"

export default function Switch(props) {
    return (

        <div className={`switch--container ${props.darkModeState ? "switch--container--dark" : " "}`} onClick={props.toggleFunction}>
            <div className={`switch ${props.darkModeState ? "switch--dark" : " "}`}>
                <div className={`switch--button ${props.darkModeState ? "switch--button--dark" : " "} ${props.State ? "switch--button--state" : " "}`}>
                    {props.State ? `${props.textTrue}` : `${props.textFalse}`}
                    </div>
            </div>
        </div>










        // <div className="switch--container">
            
        //         <div className={`toggle--button--container ${props.darkModeState ? "toggle--dark" : ""}`}>
        //             <div className={`toggle--button ${props.darkModeState ? "toggle--button--dark" : ""}`} onClick={props.toggleDarkMode}>{props.darkModeState ? "DARK" : "LIGHT"}</div>
        //         </div>
           
        // </div>
    )
}