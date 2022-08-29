import style from "./style.module.css";
import one from "./1.jpg";
import two from "./2.jpg";
import three from "./3.jpg";
import four from "./4.jpg";
import five from "./5.jpg";
import React, { useState  } from 'react';
import Image from 'next/image';
const PreviewComp = () => {
    const [isActive, setActive] = useState(true);
    const toggleClass = () => {
        setActive(!isActive);
      }
      const setBg = (pos) => {
            const bg = document.querySelector('.bg-nav');
            bg.style.top = pos;
      };
    return ( 
        <div className={style.wrap}>
        <div className={`${style.navigation} ${isActive ? style.active : null}`}>
        <h2 className={style.title}>Users</h2>
        <div className={`${style.bg} bg-nav`}></div>
        <ul className={style.ul}>
            <li className={style.li} onClick={()=>{setBg("20px")}}>
                <span className={style.img}><Image className={style.image} src={one} alt="profile picture"></Image></span>
                <div className={style.info}>
                    <p className={style.name}><span className={`${style.status} ${style.green}`}></span>James Edward</p>
                    <p className={style.role}>Manager | 22.3k</p>
                </div>
            </li>
            <li className={style.li} onClick={()=>{setBg("90px")}}>
                <span className={style.img}><Image className={style.image} src={two} alt="profile picture"></Image></span>
                <div className={style.info}>
                    <p className={style.name}><span className={`${style.status} ${style.green}`}></span>Brian Timothy</p>
                    <p className={style.role}>Manager | 22.3k</p>
                </div>
            </li>
            <li className={style.li} onClick={()=>{setBg("160px")}}>
                <span className={style.img}><Image className={style.image} src={three} alt="profile picture"></Image></span>
                <div className={style.info}>
                    <p className={style.name}><span className={`${style.status} ${style.red}`}></span>Joshua Kenneth</p>
                    <p className={style.role}>Manager | 22.3k</p>
                </div>
            </li>
            <li className={style.li} onClick={()=>{setBg("230px")}}>
                <span className={style.img}><Image className={style.image} src={four} alt="profile picture"></Image></span>
                <div className={style.info}>
                    <p className={style.name}><span className={`${style.status} ${style.green}`}></span>Steven Paul</p>
                    <p className={style.role}>Manager | 22.3k</p>
                </div>
            </li>
            <li className={style.li} onClick={()=>{setBg("300px")}}>
                <span className={style.img}><Image className={style.image} src={five} alt="profile picture"></Image></span>
                <div className={style.info}>
                    <p className={style.name}><span className={`${style.status} ${style.red}`}></span>Matthew Anthony</p>
                    <p className={style.role}>Manager | 22.3k</p>
                </div>
            </li>
        </ul>
        <div className={style.toggle} onClick={toggleClass}></div>
    </div>
    </div>
    );
}
 
export default PreviewComp;