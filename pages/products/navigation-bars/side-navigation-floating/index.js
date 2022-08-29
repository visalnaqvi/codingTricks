import style from "../../../../styles/preview.module.css"
import Nav from "./assets/side-navigation.js";
import text from "../../../../styles/Text.module.css"
import Tags from "../../../../comps/tags"
import CodeSection from "../../../../comps/codeSection/codeSection";
import Link from "next/link"
import Head from "next/head";
const Preview = () => {
    return ( 
        <div className={style.wrap}>
                <Head>
        <title>HTML/CSS/JS Side Navigation Bar - HTML/ CSS/ JavaScript Elements Code Snippet</title>

        <meta name="description" content="Coding Tricks - HTML/ CSS/ JavaScript Elements Code Snippet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <div className={style.path}>
                <Link href="/">Home</Link> &#x0003E; HTML/CSS/JS Side Navigation Bar
            </div>
        <Tags texts={["HTML",'CSS','JavaScript','Navigation Bar','Side Navigation']}></Tags>
        
         <h2 className={text.h2Bold}>Live Preview Click to Use</h2>
         <div className={style.preview}>
            <Nav></Nav>
         </div>
         <br></br>
         <br></br>
         <h1 className={text.h1}>HTML/CSS/JS Side Navigation Bar</h1>
         <h2 className={text.h2}>Browse this design in React.js Code</h2>
         <CodeSection></CodeSection>
         
        </div>
     );
}
 
export default Preview;