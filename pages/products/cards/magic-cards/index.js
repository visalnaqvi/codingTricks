import style from "../../../../styles/preview.module.css"
import PreviewComp from "./assests/preview";
import text from "../../../../styles/Text.module.css"
import Tags from "../../../../comps/tags"
import CodeSection from "../../../../comps/codeSection/cards/magic_card";
import Link from "next/link"
import Head from "next/head";
const Preview = () => {
    return ( 
        <div className={style.wrap}>
                <Head>
        <title>HTML/CSS/JS Magic Card - HTML/ CSS/ JavaScript Elements Code Snippet</title>

        <meta name="description" content="Coding Tricks - HTML/ CSS/ JavaScript Elements Code Snippet" />
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
         <h1 className={text.h1}>HTML/CSS/JS Magic Card Bar</h1>
         <h2 className={text.h2}>Browse this design in React.js Code</h2>
         <CodeSection></CodeSection>
         
        </div>
     );
}
 
export default Preview;