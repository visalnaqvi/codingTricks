import style from "../../../../styles/preview.module.css"
import PreviewComp from "./assests/preview";
import text from "../../../../styles/Text.module.css"
import Tags from "../../../../comps/tags"
import CodeSection from "../../../../comps/codesection";
import Link from "next/link";
import Head from "next/head";
const Preview = () => {
    const htmlCode = `<div class="navigation">

    <div class="menuToggle"></div>
    <div class="menu">
          <ul>
               <li style="--i:0.1s;">
                    <a href="#"><ion-icon name="chatbubble-ellipses-outline"></ion-icon></a>
               </li>
               <li style="--i:0.2s;">
                    <a href="#"><ion-icon name="logo-whatsapp"></ion-icon></a>
               </li>
              <li style="--i:0.3s;">
                    <a href="#"><ion-icon name="call-outline"></ion-icon></ion-icon></a>
               </li>
          </ul>
    </div>
    </div>`
    const cssCode = `*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
   }
   body{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #FF5757;
   }
   .navigation{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
   }
   .menuToggle{
        position: relative;
        width: 70px;
        height: 70px;
        background-color: #fff;
        border-radius: 70px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 15px 25px rgba(0,0,0,0.15);
   }
   .menuToggle::before{
        content: "+";
        position: absolute;
        font-size: 3rem;
        font-weight: 700;
        color: crimson;
        transition: 1.5s;
   }
   .menuToggle.active::before{
        transform: rotate(225deg);
   }
   .menu{
        position: absolute;
        width: 30px;
        height: 30px;
        background-color: #fff;
        border-radius: 70px;
        z-index: -1;
        transition: transform 0.5s, width 0.5s, height 0.5s;
        transition-delay: 1s,0.5s,0.5s;
        transition-timing-function: cubic-bezier(0.75,0.82,0.165,1);
   }
   .menuToggle.active ~ .menu{
        width: 240px;
        height: 70px;
        z-index: 1;
        transform: translateY(-100px);
        transition-delay: 0s,0.5s,0.5s;
   }
   .menu::before{
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        background-color: #fff;
        left: calc(50% - 8px);
        bottom: 4px;
        transform: rotate(45deg);
        border-radius: 2px;
        transition: 0.5s;
   }
   .menuToggle.active ~ .menu::before{
        bottom: -6px;
        transition-delay: 0.5s;
   }
   .menu ul{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        gap: 40px }
   .menu ul li{
        list-style: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-30px);
        transition: 0.25s;
        transition-delay: calc(0s + 0.3s);
   }
   .menuToggle.active ~ .menu ul li{
        opacity: 1;
        visibility: visible;
        transform: translateY(0px);
        transition-delay: calc(0.75s + 0.3s);
   }
   .menu ul li a{
        display: block;
        font-size: 2rem;
        text-decoration: none;
        color: #555;
   }
   .menu ul li:hover a{
        color: crimson;
   }`
   const jsCode = `<script>
   const menuToggle = document.querySelector(".menuToggle");
   menuToggle.addEventListener("click",function(){
         menuToggle.classList.toggle("active");
   })
</script>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>`
    return ( 
        <div className={style.wrap}>
                <Head>
        <title>HTML/CSS/JS Action Button - HTML/ CSS/ JavaScript Elements Code Snippet</title>

        <meta name="description" content="Coding Tricks - HTML/ CSS/ JavaScript Elements Code Snippet for Action Button using HTML CSS JavaScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <div className={style.path}>
                <Link href="/">Home</Link> &#x0003E; HTML/CSS/JS Action Button
            </div>
        <Tags texts={["HTML",'CSS','JavaScript','Action Button']}></Tags>
         <h2 className={text.h2Bold}>Live Preview is not Available for this element</h2> 
        
         <div className={style.preview}>
            <PreviewComp></PreviewComp>
         </div>
         <br></br><br></br>
         <h1 className={text.h1ProductPage}>HTML/CSS/JS Action Button</h1>
         <h2 className={text.h2ProductPage}>Browse this design in React.js Code</h2>
         <CodeSection htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode}></CodeSection>
        </div>
     );
}
 
export default Preview;