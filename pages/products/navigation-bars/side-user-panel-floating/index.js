import style from "../../../../styles/preview.module.css"
import PreviewComp from "./assets/preview";
import text from "../../../../styles/Text.module.css"
import Tags from "../../../../comps/tags"
import CodeSection from "../../../../comps/codesection";
import Link from "next/link"
import Head from "next/head";
const Preview = () => {
    const htmlCode = `<div class="navigation active" >
    <h2 class="title" >Users</h2 >
         <div class="bg" ></div >
               <ul >
                      <li position="20px" >
                            <span class="img" ><img src="./1.jpg" / ></span >
                            <div class="info" >
                                  <p class="name" ><span class="status green" ></span >James Edward</p >
                                  <p class="role" >Manager | 22.3k</p >
                            </div >
                      </li >
                   <li position="90px" >
                        <span class="img" ><img src="./2.jpg" / ></span >
                        <div class="info" >
                             <p class="name" ><span class="status green" ></span >Brian Timothy</p >
                             <p class="role" >Manager | 22.3k</p >
                        </div >
                   </li >
                   <li position="160px" >
                        <span class="img" ><img src="./3.jpg" / ></span >
                        <div class="info" >
                             <p class="name" ><span class="status red" ></span >Joshua Kenneth</p >
                             <p class="role" >Manager | 22.3k</p >
                        </div >
                   </li >
                   <li position="230px" >
                        <span class="img" ><img src="./4.jpg" / ></span >
                        <div class="info" >
                             <p class="name" ><span class="status green" ></span >Steven Paul</p >
                             <p class="role" >Manager | 22.3k</p >
                        </div >
                   </li >
                   <li position="300px" >
                        <span class="img" ><img src="./5.jpg" / ></span >
                        <div class="info" >
                             <p class="name" ><span class="status red" ></span >Matthew Anthony</p >
                             <p class="role" >Manager | 22.3k</p >
                        </div >
                   </li >
               </ul >
          <div class="toggle" ></div >
</div >`
const cssCode = `*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}
.title{
    display: none;
}
body{
    background-color: #273150;
}
.navigation{
    border-left: 5px solid #01081f;
    position: fixed;
    padding-top: 20px;
    border-radius: 20px;
    width: 80px;
    height: calc(100vh - 20px);
    background-color: #01081f;
    transition: 0.5s;
    overflow: hidden;
    bottom: 10px;
    left: 10px;
}
.navigation.active{
    width: 300px;
    border-radius: 20px;
}
.navigation ul li{
    position: relative;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 70px;
    width: 300px;
    transition: 0.5 ease;
    cursor: pointer;
}
.navigation .bg{
    height: 70px;
    width: 100%;
    border-top-left-radius: 70px;
    border-bottom-left-radius: 70px;
    position: absolute;
    top: 20px;
    left: 0;
    background-color: #273150;
    transition: 0.5s ease-in-out ;
}
.navigation ul li:hover .info .name{
    text-decoration: underline;
}
.navigation ul li .img{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
}
.navigation ul li .info{
    transition: 0.5s ease-in-out;
    padding-left: 5px;
    transform: translateX(30px);
}
.navigation.active ul li .info{
    transform: translateX(0px);
}
.navigation ul li .info .name{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1em;
    font-weight: 700;
}
.status{
    margin-right: 8px;
    height: 8px;
    width: 8px;
    border-radius: 100%;
    background-color: #fff;
}
.status.red{
    background-color: crimson;
}
.status.green{
    background-color: greenyellow;
}
.navigation ul li .info .role{
    font-size: 0.8em;
    font-weight: 700;
    color: #394871;
}
.navigation ul li .img img{
    border: 2px solid #fff;
    height: 50px;
    width: 50px;
    border-radius: 100%;
}
.navigation .bg::before{
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    top: -20px;
    right: 0px;
    background-color:#01081f;
    border-bottom-right-radius: 50px;
    box-shadow: 7.5px 7.5px 0 7.5px #273150;
}
.navigation .bg::after{
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -20px;
    right: 0px;
    background-color: #01081f;
    border-top-right-radius: 50px;
    box-shadow: 7.5px -7.5px 0 7.5px #273150;
}
.toggle{
    position: absolute;
    bottom: 15px;
    right: 15px;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    background-color: #fff;
    box-shadow: 5px 5px 10px rgba(0,0,0);
    display: flex;
    justify-content: center;
    align-items: center;
}
.toggle::before{
    position: absolute;
    content: "";
    border-radius: 3px;
    transform: translateY(-5px);
    width: 26px;
    height: 3px;
    background-color: #273150;
    transition: 1s;
}
.toggle::after{
    position: absolute;
    content: "";
    border-radius: 3px;
    transform: translateY(5px);
    width: 26px;
    height: 3px;
    background-color: #273150;
    transition: 1s;
}
.navigation.active .toggle::before{
    transform: translateY(0px) rotate(-405deg);
}
.navigation.active .toggle::after{
    transform: translateY(0px) rotate(225deg);
}`
const jsCode = `const nav = document.querySelector(".navigation");
const bg = document.querySelector(".bg");
document.querySelector(".toggle").addEventListener("click", function () {
      nav.classList.toggle("active");
})
const lis = document.querySelectorAll(".navigation ul li");
lis.forEach((li)=>{
      li.addEventListener("click",function(){
           bg.style.top = li.getAttribute("position");
      })
})`
    return ( 
        <div className={style.wrap}>
                <Head>
        <title>HTML/CSS/JS Side User Panel - HTML/ CSS/ JavaScript Code Snippet</title>

        <meta name="description" content="Coding Tricks - HTML/ CSS/ JavaScript Elements Code Snippet for Side User Panel Bar using HTML CSS JavaScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <div className={style.path}>
                <Link href="/">Home</Link> &#x0003E; HTML/CSS/JS Side User Panel Bar
            </div>
        <Tags texts={["HTML",'CSS','JavaScript','Navigation Bar','Side Navigation','User Panel']}></Tags>
        
         <h2 className={text.h2Bold}>Live Preview Click to Use</h2>
         <div className={style.preview}>
            <PreviewComp></PreviewComp>
         </div>
         <br></br>
         <br></br>
         <h1 className={text.h1ProductPage}>HTML/CSS/JS Side User Panel</h1>
         <h2 className={text.h2ProductPage}>Side User Panel Bar Code HTML/CSS/JavaScript</h2>
         <CodeSection htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode}></CodeSection>
         <article>
         <h1 className={text.h1ProductPage}>Need a user panel?</h1>
         <div className={style.iframe}>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/UrPIW0YBqp0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
         </div>
        <p className={text.pArticleText}>Well do you have lots of users communicating on your app and want to add a nice easy to use <strong>side user panel</strong> to your application.</p>
        <p className={text.pArticleText}>We got you covered. Here we have a modern <strong>side user panel</strong> developed using <strong>HTML CSS and JavaScript</strong> which will help you organise and manage your users.</p>
        <p className={text.pArticleText}>We have used pure <strong>HTML CSS and JavaScript</strong> to develop this design. You dont need to put any extra effort to make the code working. Just copy all the <strong>HTML CSS JavaScript code</strong> and paste it in your code.</p>
        <p className={text.pArticleText}>Navigation is made easy using profile picture and name of user. The panel can be used in two states active or closed. In active state panel display all the information about the user. Code is very simple and easy to use, you can add more information to dispaly inside each tab. In closed state panel displays users profile picture for navigation purpose.</p>
        <p className={text.pArticleText}>Follow us on Instagram and subscribe us on youtube for more such <strong>HTML CSS JavaScript code snippets.</strong></p>
         </article>

        </div>
     );
}
 
export default Preview;