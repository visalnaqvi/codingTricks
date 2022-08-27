import style from "../styles/SideNav.module.css"
import Link from "next/link";
import HomeIcon from "../assests/nav-icons/home.svg"
import elementsIcon from "../assests/nav-icons/elements.svg"
import codeIcon from "../assests/nav-icons/frameworks.svg";
import Image from "next/image";
import { useState } from "react";
const SideNav = () => {

  
    const changeBgPos = (pos)=>{
            document.querySelector('.bg').style.top = pos;
    }

    return ( 
        <div className={style.wrap}>
        <div className={style.navigation}>
                <ul className={style.ul}>
                    {/* <li onClick={()=>{changeBgPos("0px")}}>
                        <Link href="/">
                            <div className={style.li}>
                            <span className={style.icon}><Image src={HomeIcon} alt="home icon"></Image></span>
                            <span className={style.text}>Home</span>
                            </div>
                        </Link>
                    </li> */}
                      <li onClick={()=>{changeBgPos("0px")}}>
                        <Link href="/">
                            <div className={style.li}>
                            <span className={style.icon}><Image src={elementsIcon} alt="apps icon"></Image></span>
                            <span className={style.text}>Elements</span>
                            </div>
                        </Link>
                    </li>
                    <li onClick={()=>{changeBgPos("50px")}}>
                        <Link href="/frameworks">
                            <div className={style.li}>
                            <span className={style.icon}><Image src={codeIcon} alt="code icon"></Image></span>
                            <span className={style.text}>Frameworks</span>
                            </div>
                        </Link>
                    </li>
                </ul>
                <div className={`${style.bg} bg`}></div>
        </div>
        </div>
     );
}
 
export default SideNav;