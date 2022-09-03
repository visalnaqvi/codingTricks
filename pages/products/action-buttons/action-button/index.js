import style from "../../../../styles/preview.module.css";
import PreviewComp from "./assests/preview";
import text from "../../../../styles/Text.module.css";
import Tags from "../../../../comps/tags";
import CodeSection from "../../../../comps/codesection";
import Link from "next/link";
import Head from "next/head";
const Preview = () => {
 const htmlCode = `<div class="navigation">
      <ul>
           <li class="list active">
                <a href="#" >
                     <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                     <span class="text">Home</span>
                </a>
           </li>
            <li class="list">
                     <a href="#" >
                          <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
                          <span class="text">Profile</span>
                     </a>
            </li>
            <li class="list">
                     <a href="#" >
                          <span class="icon"><ion-icon name="chatbubble-ellipses-outline"></ion-icon></span>
                          <span class="text">Message</span>
                     </a>
            </li>
            <li class="list">
                     <a href="#" >
                          <span class="icon"><ion-icon name="camera-outline"></ion-icon></span>
                          <span class="text">Photos</span>
                     </a>
            </li>
            <li class="list">
                     <a href="#" >
                          <span class="icon"><ion-icon name="settings-outline"></ion-icon></span>
                          <span class="text">Settings</span>
                     </a>
            </li>
            <div class="indicator">       </div>
      </ul>
</div>`
const cssCode = `*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}
:root{
  --clr:#222327;
}
body{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--clr);
}
.navigation{
  width: 400px;
  height: 70px;
  background: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.navigation ul{
  display: flex;
  width: 350px;
}
.navigation ul li{
  position: relative;
  list-style: none;
  width: 70px;
  height: 70px;
  z-index: 1;
}
.navigation ul li a{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500;
}
.navigation ul li a .icon{
  position: relative;
  display: block;
  line-height: 75px;
  font-size: 1.5rem;
  text-align: center;
  transition: 0.5s;
  color:var(--clr);
}
.navigation ul li.active a .icon{
  transform: translateY(-32px);
}
.navigation ul li a .text{
  position: absolute;
  color:var(--clr);
  font-weight: 400;
  font-size: 0.75em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  opacity: 0;
  transform: translateY(20px);
}
.navigation ul li.active a .text{
   opacity: 1;
   transform: translateY(10px);
}
.indicator{
   position: absolute;
   top: -50%;
  width: 70px;
  height: 70px;
  background: #29fd53;
  border-radius: 50%;
  border: 6px solid var(--clr);
  transition: 0.5s;
}
.indicator::before{
   content: "";
   position: absolute;
   top: 50%;
   left: -22.5px;
   width: 20px;
   height: 20px;
   border-top-right-radius: 20px;
   box-shadow: 1px -10px 0 0 var(--clr);
  background: transparent;
}
.indicator::after{
   content: "";
   position: absolute;
   top: 50%;
   right: -22.5px;
   width: 20px;
   height: 20px;
   border-top-left-radius: 20px;
   box-shadow: -1px -10px 0 0 var(--clr);
   background: transparent;
}
.navigation ul li:nth-child(1).active ~ .indicator{
   transform: translate(calc(70px * 0));
}
.navigation ul li:nth-child(2).active ~ .indicator{
   transform: translate(calc(70px * 1));
}
.navigation ul li:nth-child(3).active ~ .indicator{
  transform: translate(calc(70px * 2));
}
.navigation ul li:nth-child(4).active ~ .indicator{
   transform: translate(calc(70px * 3));
}
.navigation ul li:nth-child(5).active ~ .indicator{
  transform: translate(calc(70px * 4));
}`
const jsCode = `const list = document.querySelectorAll(".list");
list.forEach((item)=>{
      item.addEventListener("click",(e)=>{
            list.forEach((item)=>{
            item.classList.remove("active");
            })
      item.classList.add("active");
      })
})
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>`
  return (
    <div className={style.wrap}>
      <Head>
        <title>
          HTML/CSS/JS Action Bar - HTML/ CSS/ JavaScript Elements Code Snippet
        </title>

        <meta
          name="description"
          content="Coding Tricks - HTML/ CSS/ JavaScript Elements Code Snippet for Action Bar using HTML CSS JavaScript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <div className={style.path}>
        <Link href="/">Home</Link> &#x0003E; HTML/CSS/JS Action Bar
      </div>
      <Tags texts={["HTML", "CSS", "JavaScript", "Action Button"]}></Tags>
      <h2 className={text.h2Bold}>Live Preview Click to Use</h2>
      <div className={style.preview}>
        <PreviewComp></PreviewComp>
      </div>
      <br></br>
      <br></br>
      <h1 className={text.h1ProductPage}>HTML/CSS/JS Action Bar</h1>
      <h2 className={text.h2ProductPage}>
        Browse this design in React.js Code
      </h2>
      <CodeSection htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode}></CodeSection>
    </div>
  );
};

export default Preview;
