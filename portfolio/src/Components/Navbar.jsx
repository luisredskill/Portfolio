import React from "react"
import Switch from "./Switch"

import "../CSS/Navbar.css"

export default function Navbar(props){

    function Cliquei() {
        console.log("deu certo")
    }

    const darkStatus = props.darkModeState ? "dark": ""
    

    return(
        <nav className={darkStatus}>
            <div>
                <a href="#" className={`${darkStatus} menu--links`}>{props.languageState ?  "PÁGINA PRINCIPAL" : "HOME PAGE"}</a>
                <a href=""  className={`${darkStatus} menu--links`}>{props.languageState ?  "SOBRE MIM" : "ABOUT ME"}</a>
                <a href=""  className={`${darkStatus} menu--links`}>{props.languageState ?  "CONTATO" :"CONTACT" }</a>
            </div>

            <div className="switches--container">

           

                <Switch

                // switch que configura o DARKMODE do aplicativo

                darkModeState = {props.darkModeState}   // booleano do estado de Darkmode para alterações CSS.
                languageState = {props.languageState}   // booleano do estado de Linguagem PT-BR/EN-US.
                State = {props.darkModeState}           // booleano que dita a parte CSS do botão quando ele desliza.
                toggleFunction = {props.toggleDarkMode} // Função que altera o booleano de DARKMODE.
                textTrue = "LIGHT" 
                textFalse = "DARK"
                />
                <Switch

                // switch que configura a LINGUAGEM do aplicativo

                darkModeState = {props.darkModeState}   // booleano do estado de Darkmode para alterações CSS.
                languageState = {props.languageState}   // booleano do estado de Linguagem PT-BR/EN-US.
                State = {props.languageState}           // booleano que dita a parte CSS do botão quando ele desliza.
                toggleFunction = {props.toggleLanguage} // Função que altera o booleano de linguagem.
                textTrue = "EN-US"
                textFalse = "PT-BR"
                />
            </div>

        </nav>
    )
}