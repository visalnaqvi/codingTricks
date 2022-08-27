import Image from "next/image";
import Logo from "../assests/logo.svg"
import style from "../styles/Nav.module.css"
import Link from "next/link";
import Script from "next/script";
const NavBar = () => {
    return ( 

        <nav className={style.navgationTop}>
         <div className={`${style.mobileWrap} mobileWrap`}>
            <h4 className={style.mobileTitle}>CODING TRICKS</h4>
            <ul className={style.mobileUl}>
               <li onClick={(e)=>{
                  document.querySelectorAll(".mobileLi").forEach((li)=>{
                     li.classList.remove(style.active);
                  })
                  e.target.classList.add(style.active);
                  document.querySelector(".mobileWrap").style.left = "-100%";
               }} className={`${style.mobileLi} mobileLi ${style.active}`}><Link href="/">Hire Us</Link></li>
               <li onClick={(e)=>{
                  document.querySelectorAll(".mobileLi").forEach((li)=>{
                     li.classList.remove(style.active);
                  })
                  e.target.classList.add(style.active);
                  document.querySelector(".mobileWrap").style.left = "-100%";
               }}  className={`${style.mobileLi} mobileLi`}><Link href="/">Elements</Link></li>
                <li onClick={(e)=>{
                  document.querySelectorAll(".mobileLi").forEach((li)=>{
                     li.classList.remove(style.active);
                  })
                  e.target.classList.add(style.active);
                  document.querySelector(".mobileWrap").style.left = "-100%";
               }}  className={`${style.mobileLi} mobileLi`}><Link href="/frameworks">Frameworks</Link></li>
               <li onClick={(e)=>{
                  document.querySelectorAll(".mobileLi").forEach((li)=>{
                     li.classList.remove(style.active);
                  })
                  e.target.classList.add(style.active);
                  document.querySelector(".mobileWrap").style.left = "-100%";
               }}  className={`${style.mobileLi} mobileLi`}><Link className={style.Link} href="https://www.instagram.com/coding_.tricks/">
                  <div className={style.mobileIconBox}>
                    
                  <ion-icon style={{fontSize:"25px",marginRight:"10px"}} name="logo-instagram"></ion-icon>
                  <span className={style.mobileText}>Instagram</span>
                  </div>
                  </Link>
                  </li>
                  <li onClick={(e)=>{
                  document.querySelectorAll(".mobileLi").forEach((li)=>{
                     li.classList.remove(style.active);
                  })
                  e.target.classList.add(style.active);
                  document.querySelector(".mobileWrap").style.left = "-100%";
               }}  className={`${style.mobileLi} mobileLi`}><Link className={style.Link} href="https://www.instagram.com/coding_.tricks/">
                  <div className={style.mobileIconBox}>
                    
                  <ion-icon style={{fontSize:"25px",marginRight:"10px"}} name="logo-youtube"></ion-icon>
                  <span className={style.mobileText}>Youtube</span>
                  </div>
                  </Link>
                  </li>
            </ul>
            <div className={`${style.toggle} ${style.mobileToggle}`} onClick={()=>{
               document.querySelector(".mobileWrap").style.left = "-100%";
            }}></div>
         </div>
         <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></Script>
<Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
           <div className={style.logoContainer}>
            <div className={style.toggle} onClick={()=>{
               document.querySelector(".mobileWrap").style.left = "0%";
            }}></div>
            <Image src={Logo} alt="coding tricks logo"></Image>
           </div>
           <div className={style.iconHolder}>
            <ul className={style.ul}>
               <li className={style.li}><Link className={style.Link} href="https://www.instagram.com/coding_.tricks/"><ion-icon style={{fontSize:"30px"}} name="logo-instagram"></ion-icon></Link></li>
               <li className={style.li}><Link href="#"><ion-icon style={{fontSize:"30px"}} name="logo-youtube"></ion-icon></Link></li>
            </ul>
            <button className={style.hireButton}>Hire Us</button>
           </div>
        </nav> 
     );
}
 
export default NavBar;