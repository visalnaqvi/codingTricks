import style from "../../../../styles/preview.module.css"
import PreviewComp from "./assests/preview";
import text from "../../../../styles/Text.module.css"
import Tags from "../../../../comps/tags"
import CodeSection from "../../../../comps/codesection";
import Link from "next/link"
import Head from "next/head";
const Preview = () => {
    const htmlCode = `<div class="card">
    <div class="ineer_card">
          <div class="card_faces card_face--front">
                <h2>what we do?</h2>
          </div>
          <div class="card_faces card_face--back">
                <div class="card_content">
                      <div class="card_header">
                            <h3>what we do?</h3>
                      </div>
                      <div class="card_body">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem illum laborum in
                            ipsam sapiente optio ipsa maiores modi, omnis quisquam eligendi, fugiat quis nam inventore
                            minima aliquam perspiciatis consequuntur facere!
                            </p>
                      </div>
                </div>
          </div>
   </div>
</div>`
const cssCode = `body{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #444444;
}
.card {
    margin: 100px 20px;
    height: 60vh;
    width: 280px;
    perspective: 1000px;
}
.ineer_card {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    position: relative;
    cursor: pointer;
}
.ineer_card.is-flipped {
    transform: rotateY(180deg);
}
.card_faces {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
}
.card_face--front {
    display: flex;
    background-color: #5551aa;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
}
.card_face--front h2 {
    color: white;
    font-size: 32px;
    text-transform: uppercase;
    font-family: "Josefin Sans", sans-serif;
    font-size: small;
    text-shadow: 0px 8px 2px rgba(0, 0, 0, 0.2);
    letter-spacing: 8px;
}
.card_face--back {
    background-color: white;
    transform: rotateY(180deg);
}
.card_content {
    width: 100%;
    height: 100%;
}
.card_header {
    padding: 30px 30px 40px;
    position: relative;
}
.card_header h3 {
   font-family: "Josefin Sans", sans-serif;
   color: white;
   padding-top: 20px;
   text-transform: uppercase;
   font-size: x-small;
   letter-spacing: 10px;
   line-height: 23px;
}
.card_header:after {
   content: "";
   display: block;
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: -1;
   border-radius: 0px 0px 50% 0px;
   background: rgb(2,0,36);
   background: linear-gradient(90deg, rgba(2,0,36,1) 0%,      rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
}
.card_body {
   padding: 30px;
   font-family: "Josefin Sans", sans-serif;
   font-size: 13px;
   line-height: 20px;
}`
const jsCode = `const cards = document.querySelectorAll(".ineer_card");
cards.forEach(function (card) {
      card.addEventListener("click", function () {
           card.classList.toggle("is-flipped");
      })
});`
    return ( 
        <div className={style.wrap}>
                <Head>
        <title>HTML/CSS/JS 3D Cards - HTML/ CSS/ JavaScript Elements Code Snippet</title>

        <meta name="description" content="Coding Tricks - HTML/ CSS/ JavaScript Elements Code Snippet for 3D HTML CSS card" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <div className={style.path}>
                <Link href="/">Home</Link> &#x0003E; HTML/CSS/JS 3D Cards
            </div>
        <Tags texts={["HTML",'CSS','JavaScript','3d','cards']}></Tags>
        
         <h2 className={text.h2Bold}>Live Preview Click to Use</h2>
         <div className={style.preview}>
            <PreviewComp></PreviewComp>
         </div>
         <br></br>
         <br></br>
         <h1 className={text.h1ProductPage}>HTML/CSS/JS 3D Cards</h1>
         <h2 className={text.h2ProductPage}>Browse this design in React.js Code</h2>
         <CodeSection htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode}></CodeSection>
         
        </div>
     );
}
 
export default Preview;