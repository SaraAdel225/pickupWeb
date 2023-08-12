import React, { useState } from "react"
import logo from "../img/Frame.png"
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import OutsideclickHandler from "react-outside-click-handler"
const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const getMenuStyle = (menuOpened) =>{
        if(document.documentElement.clientWidth <= 980){
            return {right: !menuOpened && "-100%"}
        }
    }
    return(
        <div className="header flexBetween" id="home">
                <div className="sectionImg"><img class="logo" src={logo} alt="" /></div>
                <OutsideclickHandler
                onOutsideClick={()=>{
                    setMenuOpened(false)
                }}>
                <ul className="HeaderList flexBetween"  style={getMenuStyle(menuOpened)}>
                    <li><a href="#contact">تواصل معنا</a></li>
                    <li><a href="#download">تنزيل التطبيق</a></li>
                    <li><a href="#services">خدماتنا</a></li>
                    <li><a href="#about">من نحن </a></li>
                    <li><a href="#home">الرئيسيه</a></li>
                </ul>
                </OutsideclickHandler>
                <div className="list" onClick = {()=> setMenuOpened((prev) => !prev)}>
                <FontAwesomeIcon icon={faListCheck} />
                </div>
            </div>
    )
}
export default Header;