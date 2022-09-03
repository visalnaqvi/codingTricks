import style from "../../../../styles/preview.module.css"
import PreviewComp from "./assests/preview";
import text from "../../../../styles/Text.module.css"
import Tags from "../../../../comps/tags"
import CodeSection from "../../../../comps/codesection";
import Link from "next/link"
import Head from "next/head";
import css from "styled-jsx/css";
const Preview = () => {
    const htmlCode = `<div class="card">
    Magic Card
</div>`
const cssCode = `@property --rotate {
    syntax: "<angle>";
    initial-value: 132deg;
    inherits: false;
}
body {
    min-height: 100vh;
    background: #212534;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 2rem;
    padding-bottom: 2rem;
    box-sizing: border-box;
}
.card {
    background: #191c29;
    width: calc(65vh / 1.5);
    height: 65vh;
    padding: 3px;
    position: relative;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    font-size: 1.5em;
    color: #fff;
    cursor: pointer;
    font-family: cursive;
}
.card:hover {
    background-color: transparent;
    overflow: hidden;
    color: rgb(88 199 250 / 100%);
    transition: color 1s;
}
.card::before {
    content: "";
    width: 104%;
    height: 102%;
    border-radius: 8px;
    transition: 0.5s ease;
    background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
    position: absolute;
    z-index: -1;
    top: -1%;
    left: -2%;
    animation: spin 2.5s linear infinite;
}
.card::after {
    position: absolute;
    transition: 0.5 ease;
    content: "";
    top: calc(65vh / 6);
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    opacity: 0;
    margin: 0 auto;
    transform: scale(0.8);
    filter: blur(calc(65vh / 6));
    background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
    opacity: 1;
    transition: opacity .5s;
    animation: spin 2.5s linear infinite;
}
@keyframes spin {
    0% {
         --rotate: 0deg;
    }
    100% {
         --rotate: 360deg;
    }
}`
const jsCode = `Not Applicable`
    return ( 
        <div className={style.wrap}>
                <Head>
        <title>HTML/CSS/JS Magic Card - HTML/ CSS/ JavaScript Elements Code Snippet</title>

        <meta name="description" content="Coding Tricks - HTML/ CSS/ JavaScript Elements Code Snippet for Magic Card in HTML CSS JavaScript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <div className={style.path}>
                <Link href="/">Home</Link> &#x0003E; HTML/CSS/JS Magic Card
            </div>
        <Tags texts={["HTML",'CSS','JavaScript','3d','cards']}></Tags>
        
         <h2 className={text.h2Bold}>Live Preview Click to Use</h2>
         <div className={style.preview}>
            <PreviewComp></PreviewComp>
         </div>
         <br></br>
         <br></br>
         <h1 className={text.h1ProductPage}>HTML/CSS/JS Magic Card Bar</h1>
         <h2 className={text.h2ProductPage}>Browse this design in React.js Code</h2>
         <CodeSection htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode}></CodeSection>
         
        </div>
     );
}
 
export default Preview;