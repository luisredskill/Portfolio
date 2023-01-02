import githubIMG from "../Media/images/github.svg"
import circle from "../Media/images/circle-svgrepo-com.svg"
import bg from "../Media/images/BG-Grey.png"

export default function Body(props) {

    const language = props.languageState
    const darkMode = props.darkModeState
    const darkStatus = darkMode ? "dark" : "light"

    return (
        <section className={darkStatus}>
            <div className={"title"}>
                <h3>
                    {language ? "Olá, eu sou" : "Hello, I’m"}
                </h3>
                <h1>
                    LUIS RIBEIRO
                </h1>
                <h2>
                    {language ? "APAIXONADO POR DESENVOLVIMENTO FRONT-END " : "PASSIONATE FRONT-END WEB DEVELOPER"}
                </h2>
                <div className="download--resume--container">
                    <a href="https://docs.google.com/uc?export=download&id=1vQ2AKB3-aWQaz-V_XqMPLms7xd6EEX7Z"><button className={props.darkModeState ? "dark" : ""}>{language ? "Download Currículo" : "Download Resume"}</button></a>
                    <a href="https://www.canva.com/design/DAFUqcXHHbE/3jFbV9BcVwjKVahw5V3LCQ/view?utm_content=DAFUqcXHHbE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target={"_blank"}><button className={props.darkModeState ? "dark" : ""}>{language ? "Veja Online" : "View Online"}</button></a>
                </div>
                <div className="links">
                    <a href="https://github.com/luisredskill/" target='_blank'>
                        <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="50px" height="50px" className={darkMode ? "dark" : ""}>
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/luis-carlos-barberino-ribeiro-60a874132/" target="_blank">
                        <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="50px" height="50px" className={darkMode ? "dark" : ""}>    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z" /></svg>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5511986893095&text=Ol%C3%A1,%20vi%20o%20seu%20curr%C3%ADculo%20e%20gostaria%20de%20conversar%20um%20pouco!">
                        <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="50px" height="50px" className={darkMode ? "dark" : ""}>    <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z" /></svg>
                    </a>
                </div>

            </div>
            <div className={"sec-2"}>
                <h3>
                    {language ? "Coisas que eu amo " : "Things I love"}
                </h3>
                <img src={bg} alt="" />
                <h2 className="Javascript">
                {language ? "Javascript " : "Things I love"}
                </h2>
                <h2 className="React">
                {language ? "React " : "Things I love"}
                </h2>

            </div>
            {/* <div class="custom-shape-divider-bottom-1671473214">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="custom-shape-divider-top-1671473366">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
               
            </div> */}

        </section>

    )
}