import style from "../../../../styles/preview.module.css"
import PreviewComp from "./assests/preview";
import text from "../../../../styles/Text.module.css"
import Tags from "../../../../comps/tags"
import CodeSection from "../../../../comps/codesection";
import Link from "next/link"
import Head from "next/head";
const Preview = () => {
    const htmlCode = ` <h1 style="--count: 6;">
    <span aria-hidden style="--index: 0;">codingtricks.org</span>
    <span aria-hidden style="--index: 1;">codingtricks.org</span>
    <span aria-hidden style="--index: 2;">codingtricks.org</span>
    <span aria-hidden style="--index: 3;">codingtricks.org</span>
    <span aria-hidden style="--index: 4;">codingtricks.org</span>
    <span aria-hidden style="--index: 5;">codingtricks.org</span>
    <span>codingtricks.org</span>
  </h1>`
const cssCode = `:root {
    --count: 6;
    --slide-count: 4;
    --slide-duration: 0s;
    --slide-step: (var(--slide-duration) / var(--count));
    --distance: calc(50vw + 100%);
    --color: hsl(0 0% 10%);
    --bg: hsl(0 0% 98%);
  }
  
  @media(prefers-reduced-motion: no-preference) {
    :root {
      --slide-duration: 0.65s;
    }
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    display: grid;
    place-items: center;
    min-height: 100vh;
    overflow-x: hidden;
    background: var(--bg);
  }
  
  h1 {
    font-size: clamp(2rem, 10vmin, 10rem);
    font-style: italic;
    text-transform: lowercase;
    position: relative;
    margin: 0;
    color: var(--color);
  }
  
  h1 span {
    line-height: 0.85;
  }
  
  h1 span:not([aria-hidden]) {
    color: transparent;
    animation: fill 0s calc(calc(var(--count) * var(--slide-step)) + (var(--slide-duration) * var(--slide-count))) both;
  }
  
  @keyframes fill {
    to {
      color: var(--color);
    }
  }
  
  h1 span[aria-hidden] {
    --delay: calc(var(--index) * var(--slide-step));
    position: absolute;
    display: inline-block;
    animation:
      slide var(--slide-duration) var(--delay) var(--slide-count) backwards ease-in,
      slide-to calc(var(--slide-duration) * 0.5) calc(var(--delay) + (var(--slide-duration) * var(--slide-count))) forwards cubic-bezier(.87,1.4,.87,1.4);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /*    */
    --block: calc(100% / var(--count));
    clip-path: inset(
      calc(var(--index) * (var(--block)))
      -50%
      calc(100% - ((var(--index) * var(--block)) + var(--block)))
      -50%);
  }
  
  h1 span:nth-of-type(even) {
    --distance: calc(-50vw - 100%);
  }
  
  @keyframes slide {
    0% {
      transform: translate(-50%, -50%) translateX(calc(var(--distance) * -1));
    }
    100% {
      transform: translate(-50%, -50%) translateX(var(--distance));
    }
  }
  
  @keyframes slide-to {
    0% {
      transform: translate(-50%, -50%) translateX(calc(var(--distance) * -1));
    }
  }
  
  `
const jsCode = `const REPLAY = () => {
    const MARKUP = document.body.innerHTML
    document.body.innerHTML = ''
    requestAnimationFrame(() => document.body.innerHTML = MARKUP)
  }
  
  document.body.addEventListener('click', REPLAY)`
    return ( 
        <div className={style.wrap}>
                <Head>
        <title>HTML/CSS/JS Animated Sliding Text Animation Code - HTML/ CSS/ JavaScript Elements Code Snippet</title>

        <meta name="description" content="Coding Tricks - HTML/ CSS/ JavaScript Elements Code Snippet for Animated sliding text animation html css js code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <div className={style.path}>
                <Link href="/">Home</Link> &#x0003E; HTML/CSS/JS Animated Sliding Text
            </div>
        <Tags texts={["HTML",'CSS','JavaScript','Animated','Sliding','Text']}></Tags>
        
         <h2 className={text.h2Bold}>Live Preview Click to Use</h2>
         <div className={style.preview}>
            <PreviewComp></PreviewComp>
         </div>
         <br></br>
         <br></br>
         <h1 className={text.h1ProductPage}>HTML/CSS/JS Animated Sliding Text</h1>
         <h2 className={text.h2ProductPage}>Browse this design in React.js Code</h2>
         <CodeSection htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode}></CodeSection>
         
        </div>
     );
}
 
export default Preview;