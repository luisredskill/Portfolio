import React from "react"

import './CSS/App.css';
import Navbar from "./Components/Navbar"
import Body from "./Components/Body"

function App() {

  const[menu, setMenu] = React.useState(true)
  const[darkMode, setDarkMode] = React.useState(true)
  const[language, setLanguage] = React.useState(true)

  function HandleMenu() {
    setMenu(oldMenu => !oldMenu)
  }

  function HandleDarkMode() {
    setDarkMode(oldDarkMode => !oldDarkMode)
  }

  function HandleLanguage() {
    setLanguage(oldLanguage => !oldLanguage)
  }

  return (
    <div className={"darkTheme"}>
     <Navbar 
     menuState = {menu}
     darkModeState = {darkMode}
     languageState = {language}
     toggleMenuState = {HandleMenu}
     toggleDarkMode = {HandleDarkMode}
     toggleLanguage = {HandleLanguage}
     />
     <Body
      darkModeState = {darkMode}
      languageState = {language}
     />
     
    </div>
  );
}

export default App;
